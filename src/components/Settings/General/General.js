import { useContext, useState } from 'react'
import { UserInfo, Auth } from '../../../allContext'
import classes from './General.module.css'

const General = () => {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const [msg, setMsg] = useState('')
    const [name, setName] = useState(userDetail.name)
    const [email, setEmail] = useState(userDetail.email)
    const [phone, setPhone] = useState(userDetail.phone)
    const [sex, setSex] = useState(userDetail.sex)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()

        let updateFetch = await fetch(`${apiV1}/user/update`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'PATCH',
            body: JSON.stringify({
                ...userDetail,
                name,
                email,
                phone,
                sex,
            }),
        })

        if (updateFetch.ok) {
            setMsg('User info updated. Please logout and login again')
        } else {
            setMsg('Something went wrong.')
        }
    }

    return (
        <div className={classes.General}>
            <form onSubmit={submit}>
                <div className={classes.formHeader}>General Information Update</div>
                <div className={classes.formWrap}>
                    <div className={classes.formGrid}>
                        <label>
                            Full Name
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                minLength={3}
                                required
                            />
                        </label>
                        <label>
                            Sex
                            <select value={sex} onChange={(e) => setSex(e.target.value)}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </label>
                    </div>

                    <div className={classes.formGrid}>
                        <label>
                            Phone
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                maxLength={11}
                                minLength={11}
                                required
                            />
                        </label>

                        <label>
                            Email
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                    </div>
                </div>
                <button className={classes.Button}>Update</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}

export default General
