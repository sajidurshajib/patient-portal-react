import { useContext, useEffect, useState } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../../allContext'
import classes from './PatientInfo.module.css'

const PatientInfo = () => {
    const { stateAuth } = useContext(Auth)
    const [patientData, setPatientData] = useState('')

    const [msg, setMsg] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1

    const token = stateAuth.token

    useEffect(() => {
        let patientFunc = async () => {
            let patientFetch = await fetch(`${apiV1}/patients`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                dataType: 'json',
                method: 'GET',
            })
            if (patientFetch.ok) {
                let pdata = await patientFetch.json()
                setPatientData(pdata)
            }
        }

        patientFunc()
    }, [token, apiV1])

    const submit = async (e) => {
        e.preventDefault()

        let submitFetch = await fetch(`${apiV1}/patients`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                ...patientData,
            }),
        })

        if (submitFetch.ok) {
            setMsg('Patient infofmation succesfully updated')
        }
    }

    return (
        <div className={classes.PatientInfo}>
            <h2>Personal Information Update</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}

            <form onSubmit={submit}>
                <label>Occuapation</label>
                <input
                    type="text"
                    value={patientData.occupation}
                    onChange={(e) => setPatientData({ ...patientData, occupation: e.target.value })}
                />

                <label>Marital status</label>
                <input
                    type="text"
                    value={patientData.marital_status}
                    onChange={(e) => setPatientData({ ...patientData, marital_status: e.target.value })}
                />

                <div className={classes.bio}>
                    <label>Bio</label>
                    <textarea
                        name=""
                        id=""
                        rows="6"
                        value={patientData.bio}
                        onChange={(e) => setPatientData({ ...patientData, bio: e.target.value })}></textarea>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default PatientInfo
