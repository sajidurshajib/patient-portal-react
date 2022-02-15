import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import env from 'react-dotenv'
import { useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import BG from '.././../assets/img/background.jpg'
import classes from './Register.module.css'

const Register = () => {
    const { stateAuth } = useContext(Auth)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [address, setAddress] = useState('')
    const [sex, setSex] = useState('')
    const [dob, setDob] = useState('')

    const [alert, setAlert] = useState([])

    const history = useHistory()

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    const submit = async (e) => {
        e.preventDefault()

        if (password !== cnfPassword) {
            setAlert([...alert, 'Password not confirmed'])
            return
        }

        let registrationFetch = await fetch(`${api}/signup`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                email,
                phone,
                is_active: true,
                name,
                password,
                sex,
                role: 'patient',
            }),
        })

        let registrationJson = await registrationFetch.json()

        if (!registrationJson.ok) {
            let patientFetch = await fetch(`${api}/patient`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
                method: 'POST',
                body: JSON.stringify({
                    user_id: registrationJson.id,
                    address,
                    sex,
                    dob,
                }),
            })

            let patientJson = await patientFetch.json()

            console.log(registrationJson)
            console.log(patientJson)
        }
    }

    // if already logged in
    useEffect(() => {
        if (stateAuth.auth === true) {
            history.push('/profile')
        }
    }, [stateAuth, history])

    return (
        <div
            className={classes.Register}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className={classes.Wrapper}>
                <h2>
                    <FontAwesomeIcon icon={faRegistered} />
                    Register
                </h2>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type="text"
                        placeholder="Phone number [11 digit]"
                        pattern="[0-9]{11}"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        onChange={(e) => setCnfPassword(e.target.value)}
                    />

                    <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />

                    <div className={classes.sexWrapper}>
                        <div>
                            <select id="sex" onChange={(e) => setSex(e.target.value)}>
                                <option value="" disabled defaultValue={true}>
                                    Sex
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dob">Date of birth</label>
                            <input type="date" id="dob" onChange={(e) => setDob(e.target.value)} />
                        </div>
                    </div>

                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register
