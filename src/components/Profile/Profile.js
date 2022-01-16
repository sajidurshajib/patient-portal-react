import { TransparentNav } from '../Nav/Nav'
import Information from './Information/Information'
import Prescriptions from './Prescriptions/Prescriptions'
import classes from './Profile.module.css'
import ProfileCard from './ProfileCard/ProfileCard'
import Summery from './Summery/Summery'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <TransparentNav />
            <div className={`${classes.Wrapper} container`}>
                <div>
                    <ProfileCard />
                    <Information />
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
