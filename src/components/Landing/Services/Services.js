import { faHospital, faLaptopMedical, faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Services.module.css'

const Services = () => {
    return (
        <div className={classes.Services}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faLaptopMedical} /> Personal Health Record
                </p>
                <p>
                    Keep your personal & family health information with their basic health record up to date with
                    medical record & history etc in one solution.
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faUserMd} /> Find Doctor & Book Appointment
                </p>
                <p>
                    Easily access to the largest doctor pool with 30+ different specialty & 1000+ doctor profile & book
                    appointment easily.
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faMedkit} /> Medicine Order
                </p>
                <p>
                    People can order their required medicines or other medical device & equipment’s related available
                    items from My Health Portal.
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faHospital} /> 24X7 Dedicated Family Doctor
                </p>
                <p>
                    My health portal offers every individual a family doctor to ensure primary health care & emergency
                    health issue 24X7.
                </p>
            </div>
        </div>
    )
}

export default Services
