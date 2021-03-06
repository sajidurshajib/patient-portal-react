import { useContext, useEffect, useState } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import proPic from '../../../assets/img/pic-placeholder.jpg'
import classes from './ProfileCard.module.css'
import ProfilePictureUpload from './ProfilePictureUpload/ProfilePictureUpload'

const ProfileCard = ({ userDetail }) => {
    const { stateUser } = useContext(UserInfo)
    const { stateAuth } = useContext(Auth)

    const [pic, setPic] = useState({})
    const [msg, setMsg] = useState([])

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
    }, [apiV1, token, msg])

    const picUrl = 'http://127.0.0.1:8000/images/profile/' + pic

    return (
        <div className={classes.ProfileCard}>
            <div className={classes.PP}>
                <img src={pic.toString().length < 16 ? proPic : picUrl} className={classes.ProfileImage} alt="" />
                <>
                    <ProfilePictureUpload msg={msg} setMsg={setMsg} />
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
                Blood group: <span className={classes.bloodGrp}>{userDetail.blood_group}</span>
            </p>
        </div>
    )
}

export default ProfileCard
