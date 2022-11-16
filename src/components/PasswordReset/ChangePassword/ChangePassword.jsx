import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../../allContext'
import Logo from '../../../assets/logo/logo.png'
import Pic from '../../../assets/password/pass.png'
import classes from './ChangePassword.module.css'

export default function ChangePassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState('')

    const [passShown, setPassShown] = useState(false)
    const history = useHistory()

    const apiV1 = process.env.REACT_APP_API_V1
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMsg('Password not matched!')
        } else {
            let passwordFetch = await fetch(`${apiV1}/password/new`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'PUT',
                body: JSON.stringify({
                    password,
                }),
            })

            if (passwordFetch.ok) {
                setMsg('User Password Updated')

                dispatchAuth({ type: 'remove' })
                history.push('/login')
            } else {
                setMsg('Something went wrong!')
            }
        }
    }

    return (
        <div className={classes.wraper}>
            <Link to="/login">
                <img src={Logo} alt="" />
            </Link>
            <div className={classes.box}>
                <div>
                    <img src={Pic} alt="" />
                </div>
                <div>
                    <h2>
                        Reset <br />
                        Password!
                    </h2>
                    <p>
                        Enter strong password to protect your account!<span>*</span>
                    </p>
                    <form onSubmit={(e) => submit(e)}>
                        <input
                            type={passShown ? 'text' : 'password'}
                            placeholder="Enter password *"
                            minLength={4}
                            id="check"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type={passShown ? 'text' : 'password'}
                            placeholder="Confirm password *"
                            minLength={4}
                            id="check"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <div>
                            <input type="checkbox" onChange={() => setPassShown(!passShown)} />
                            <label htmlFor="check">Show Password</label>
                        </div>
                        <button type="submit">Change Password</button>
                    </form>
                    <span>{msg}</span>
                </div>
            </div>
        </div>
    )
}
