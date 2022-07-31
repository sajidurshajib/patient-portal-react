import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import IMG from '../../../assets/img/patient1.jpeg'
import proPic from '../../../assets/img/pic-placeholder.jpg'
import classes from './ProfileCard.module.css'

const ProfileCard = ({ userDetail }) => {
    const { stateUser } = useContext(UserInfo)
    const { stateAuth } = useContext(Auth)

    const [pic, setPic] = useState({})

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let imgInfoFunc = async () => {
            let imgInfoFetch = await fetch(`${apiV1}/profile-pic`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await imgInfoFetch.json()

            if (imgInfoFetch.ok) {
                setPic(infoJson.image_string)
            }
        }
        try {
            imgInfoFunc()
        } catch (e) {}
    }, [apiV1, token])

    return (
        <div className={classes.profileCard}>
            <div>
                {/* <span>Welcome, </span>
                <span className={classes.name}>{stateUser?.info?.name}</span> */}
            </div>
            <div>
                <div>
                    <span>O+</span>
                    <p>Blood</p>
                </div>
                <div>|</div>
                <div>
                    <span>22</span>
                    <p>BMI</p>
                </div>
                <div>|</div>
                <div>
                    <span>81 kg</span>
                    <p>Weight</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
