import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import Logo from '../../assets/img/logo/Logo192.png'
import { statusCheck } from '../../utils/statusCheck'
import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './Login.module.css'

const Login = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)

    const history = useHistory()

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const [alert, setAlert] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1

    const submit = async (e) => {
        e.preventDefault()

        let loginFetch = await fetch(`${apiV1}/login`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        let loginJson = await loginFetch.json()

        if (!loginFetch.ok) {
            let err = statusCheck(loginFetch, [
                { sts: 400, msg: 'User email/phone number or Password not correct.' },
                { sts: 404, msg: 'User email/phone number or Password not correct.' },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setAlert([...alert, err.msg])
            dispatchAuth({ type: 'remove' })
        } else {
            dispatchAuth({ type: 'token', payload: loginJson.access_token })

            if (stateAuth.auth === true) {
                history.push('/profile')
            }
        }
    }

    // if already logged in
    useEffect(() => {
        if (stateAuth.auth === true) {
            history.push('/home')
        }
    }, [stateAuth, history])

    return (
        <div
            className={classes.Login}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            {
                <>
                    {alert.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <div className={classes.Wrapper}>
                <Link to="" className={classes.logo}>
                    <img src={Logo} alt="" />
                </Link>
                <div className={classes.left}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faHandSparkles} /> Welcome to HEALTHx
                        </h2>
                        <p>
                            With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx is aspired
                            to be the largest digital health platform in Bangladesh providing the digital platform based
                            Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record) services for the
                            Patients.
                        </p>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Login
                        </h2>
                        <form onSubmit={submit}>
                            <div>
                                <input type="text" onChange={(e) => setIdentifier(e.target.value)} required />
                                <label>
                                    <span>Email or Phone number</span>
                                </label>
                            </div>

                            <div>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>

                            <button>Login</button>
                        </form>

                        <p className={classes.linkText}>
                            Don't have an account?{' '}
                            <Link to="/register">
                                Register <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
