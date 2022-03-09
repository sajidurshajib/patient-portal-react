import { useContext, useEffect, useState } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../allContext'
import { PersonalHabits } from '../Indicators'
import { Sidebar } from '../Nav'
import Address from './Address/Address'
import Information from './Information/Information'
import Prescriptions from './Prescriptions/Prescriptions'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'
import Summery from './Summery/Summery'

const Profile = () => {
    const [userDetail, setUserDetail] = useState({})
    const [patientDetail, setPatientDetail] = useState({})

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_V1 : env.REACT_APP_API_V1

    const token = stateAuth.token

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch(`${apiV1}/user/details`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let infoJson = await infoFetch.json()

            if (infoFetch.ok) {
                setUserDetail(infoJson)
            }
        }

        try {
            infoFunc()
        } catch (e) {}

        let patientFunc = async () => {
            let patientFetch = await fetch(`${apiV1}/patients`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let patientJson = await patientFetch.json()
            if (patientFetch.ok) {
                setPatientDetail(patientJson)
            }
        }

        try {
            patientFunc()
        } catch (e) {}
    }, [apiV1, token])

    return (
        <div className={classes.Profile}>
            {/* <TransparentNav /> */}
            <div>
                <Sidebar />
            </div>

            <div className={classes.Wrapper}>
                <div>
                    <ProfileCard userDetail={userDetail} />
                    <Information userDetail={userDetail} patientDetail={patientDetail} />
                    <Address userDetail={userDetail} />
                    <PersonalHabits />
                </div>
                <div>
                    <Summery />
                    <Prescriptions />
                </div>
            </div>
        </div>
    )
}

export default Profile
