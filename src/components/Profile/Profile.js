import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={classes.Wrapper}>
                <div>
                    <ProfileCard />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Profile
