import { useContext, useState } from 'react'
import env from 'react-dotenv'
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
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                name,
                email,
                phone,
                sex,
            }),
        })

        if (updateFetch.ok) {
            setMsg('User info update. Please logout and login again')
        } else {
            setMsg('Something went wrong.')
        }
    }

    return (
        <div className={classes.General}>
            <h2>General Update</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}

            <form onSubmit={submit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone</label>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <select className={classes.select} id="sex" value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <label htmlFor="sex">Sex</label>

                <button>Update</button>
            </form>
        </div>
    )
}

export default General
