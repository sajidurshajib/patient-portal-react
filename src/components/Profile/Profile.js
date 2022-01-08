import Prescriptions from './Prescriptions/Prescriptions'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'
import Summery from './Summery/Summery'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={`${classes.Wrapper} container`}>
                <div>
                    <ProfileCard />
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
