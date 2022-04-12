import { useContext, useState } from 'react'
import { Auth } from '../../../allContext'
import classes from './ChangePassword.module.css'

const ChangePassword = () => {
    const { stateAuth } = useContext(Auth)

    const [msg, setMsg] = useState('')

    const [newPassword, setNewPassword] = useState('')
    const [newConfPassword, setNewConfPassword] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1

    const token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()
        if (newPassword !== newConfPassword) {
            setMsg('Password not confirmed')
            return
        }

        let passwordFetch = await fetch(`${apiV1}/password/new`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                password: newPassword,
            }),
        })

        if (passwordFetch.ok) {
            setMsg('User password updated')
        } else {
            setMsg('Something went wrong.')
        }
    }
    return (
        <div className={classes.ChangePassword}>
            <h2>Change password</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}

            <form onSubmit={submit}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <label htmlFor="Password">Confirm Password</label>
                <input
                    id="conf-password"
                    type="password"
                    value={newConfPassword}
                    onChange={(e) => setNewConfPassword(e.target.value)}
                />

                <button>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword
