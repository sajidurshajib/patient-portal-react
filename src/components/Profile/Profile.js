import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../allContext'
import { PersonalHabits } from '../Indicators'
import { Sidebar } from '../Nav'
import Address from './Address/Address'
import Family from './Family/Family'
import Information from './Information/Information'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'

const Profile = () => {
    const [userDetail, setUserDetail] = useState({})
    const [patientDetail, setPatientDetail] = useState({})
    const [lastWeight, setLastWeight] = useState({})

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/user/details/`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setUserDetail(data)
            } catch {
                setUserDetail({})
            }
        }
        return fetchData()
    }, [token, apiV1])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/patients/`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setPatientDetail(data)
            } catch {
                setPatientDetail({})
            }
        }
        return fetchData()
    }, [token, apiV1])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/patient/indicators/last/weight`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setLastWeight(data)
            } catch {
                setLastWeight({})
            }
        }
        return fetchData()
    }, [token, apiV1])

    return (
        <div className={classes.Profile}>
            <div className={classes.Wrapper}>
                <div>
                    <ProfileCard userDetail={userDetail} />
                    <Information userDetail={userDetail} patientDetail={patientDetail} lastWeight={lastWeight} />
                    <Address userDetail={userDetail} />
                </div>
                <div>
                    <Family />
                    <PersonalHabits />
                </div>
            </div>
        </div>
    )
}

export default Profile
