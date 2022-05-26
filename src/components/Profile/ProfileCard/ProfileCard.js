import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import proPic from '../../../assets/img/patient1.jpeg'
import classes from './ProfileCard.module.css'
import ProfileImgUpload from './ProfileImgUpload/ProfileImgUpload'

const ProfileCard = ({ userDetail }) => {
    const { stateUser } = useContext(UserInfo)
    const { stateAuth } = useContext(Auth)

    const [pic, setPic] = useState()

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        let imgInfoFunc = async () => {
            let imgInfo = await fetch(`${apiV1}/profile-pic`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let infoJson = await imgInfo.json()

            if (imgInfo.ok) {
                setPic(infoJson.image_string)
            }
        }
    }, [apiV1, token])

    const picUrl = 'http://127.0.0.1:8000/files/' + pic

    return (
        <div className={classes.ProfileCard}>
            <div
                className={classes.PP}
                style={{
                    background: `url(${picUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                }}>
                <>
                    <ProfileImgUpload />
                </>
            </div>

            <h2>{stateUser?.info.name}</h2>
            <p>
                {userDetail.dob} <span>({stateUser?.info.sex})</span>
            </p>

            <p>
                Email: <span>{stateUser?.info.email}</span>
            </p>
            <p>
                Phone: <span>{stateUser?.info.phone}</span>
            </p>

            <p>
                Blood group: <span>{userDetail.blood_group}</span>
            </p>
        </div>
    )
}

export default ProfileCard
