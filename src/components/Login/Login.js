import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import env from 'react-dotenv'
import BG from '.././../assets/img/background.jpg'
import classes from './Login.module.css'

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

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

        console.log(loginJson)
    }

    return (
        <div
            className={classes.Login}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className={classes.Wrapper}>
                <h2>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    Login
                </h2>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        placeholder="Email or Phone number"
                        onChange={(e) => setIdentifier(e.target.value)}
                    />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
