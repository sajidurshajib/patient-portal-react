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
                    width: '160px',
                    height: '180px',
                    borderRadius: '10px',
                }}></div>

            <h2>Jhon Doe</h2>
            <p>
                Age: 25 <span>(Male)</span>
            </p>
        </div>
    )
}

export default ProfileCard
