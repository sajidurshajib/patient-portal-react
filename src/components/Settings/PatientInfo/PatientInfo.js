import { useContext, useEffect, useState } from 'react'
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
            method: 'PATCH',
            body: JSON.stringify({
                ...patientData,
            }),
        })

        if (submitFetch.ok) {
            setMsg('Patient infofmation succesfully updated')
        } else {
            setMsg('Something went wrong!')
        }
    }

    return (
        <div className={classes.patientInfo}>
            <form onSubmit={(e) => submit(e)}>
                <div className={classes.formHeader}>Personal Info Update</div>
                <div className={classes.formWrap}>
                    <label>
                        Occupation
                        <input
                            type="text"
                            value={patientData.occupation}
                            onChange={(e) => setPatientData({ ...patientData, occupation: e.target.value })}
                        />
                    </label>
                    <label>
                        Marital Status
                        <input
                            type="text"
                            value={patientData.marital_status}
                            onChange={(e) => setPatientData({ ...patientData, marital_status: e.target.value })}
                        />
                    </label>
                    <label>
                        Bio
                        <textarea
                            name=""
                            id=""
                            rows="6"
                            value={patientData.bio}
                            onChange={(e) => setPatientData({ ...patientData, bio: e.target.value })}></textarea>
                    </label>
                </div>

                <button className={classes.Button}>Submit</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}

export default PatientInfo
