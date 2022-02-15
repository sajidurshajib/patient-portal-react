import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import env from 'react-dotenv'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../allContext'
import { statusCheck } from '../../utils/statusCheck'
import BG from '.././../assets/img/background.jpg'
import classes from './Login.module.css'

const Login = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)

    const history = useHistory()

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const [msg, setMsg] = useState([])

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    const submit = async (e) => {
        e.preventDefault()

        let loginFetch = await fetch(`${api}/login`, {
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
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setMsg([...msg, err.msg])
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
            history.push('/profile')
        }
    }, [stateAuth, history])

    return (
        <div
            className={classes.Login}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            {
                <>
                    {msg.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {msg[msg.length - 1]} <span onClick={() => setMsg([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <div className={classes.Wrapper}>
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
