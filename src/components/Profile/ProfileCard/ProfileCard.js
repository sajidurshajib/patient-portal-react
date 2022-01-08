import proPic from '../../../assets/img/patient1.jpeg'
import classes from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <div className={classes.ProfileCard}>
            <div
                style={{
                    background: `url(${proPic})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                }}></div>

            <h2>Arifuzzaman Badhon</h2>
            <p>
                Age: 25 <span>(Male)</span>
            </p>
            <p>ID: 1075</p>
        </div>
    )
}

export default ProfileCard
