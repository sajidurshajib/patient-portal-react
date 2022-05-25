import { useContext } from 'react'
import { UserInfo } from '../../../allContext'
import proPic from '../../../assets/img/patient1.jpeg'
import classes from './ProfileCard.module.css'
import ProfileImgUpload from './ProfileImgUpload/ProfileImgUpload'

const ProfileCard = ({ userDetail }) => {
    const { stateUser } = useContext(UserInfo)

    return (
        <div className={classes.ProfileCard}>
            <div
                className={classes.PP}
                style={{
                    background: `url(${proPic})`,
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
