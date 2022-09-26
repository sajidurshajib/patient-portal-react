import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../../../../allContext'
import { statusCheck } from '../../../../../utils/statusCheck'
// import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './LoginPopup.module.css'

export default function LoginPopup({ setLoginOpen, setRegisterOpen, setShow }) {
    const OpenClose = () => {
        setLoginOpen(false)
        setRegisterOpen(true)
    }

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
            setShow(false)
            if (stateAuth.auth === true) {
                history.push('/plan-subscribe')
            }
        }
    }

    return (
        <div>
            <div className={classes.Login}>
                <div className={classes.overlay} onClick={() => setShow(false)}></div>
                {/* {
                    <>
                        {alert.length !== 0 ? (
                            <p className={classes.statusMsg}>
                                {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                            </p>
                        ) : null}
                    </>
                } */}

                <div className={classes.Wrapper}>
                    <div className={classes.right}>
                        {/* <div className={classes.first}>
                            <button> X </button>
                        </div> */}
                        <div>
                            <div className={classes.first}>
                                <h2>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    Login
                                </h2>
                                <button onClick={() => setShow(false)}> x </button>
                            </div>

                            <form onSubmit={(e) => submit(e)}>
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

                                <button type="submit">Login</button>
                            </form>

                            <p className={classes.linkText}>
                                Don't have an account?{' '}
                                <button className={classes.lastBtn} onClick={() => OpenClose()}>
                                    Register <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
