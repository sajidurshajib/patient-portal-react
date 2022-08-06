import {
    faCapsules,
    faFileMedicalAlt,
    faHospital,
    faLaptopMedical,
    faMedkit,
    faStethoscope,
    faUserMd,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Services.module.css'

const Services = () => {
    return (
        <div className={classes.Services}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faFileMedicalAlt} /> Personal Health Record
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faUserMd} /> Find Doctor
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faCapsules} /> Medicine Order
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faStethoscope} /> Dedicated Family Doctor
                </p>
            </div>
        </div>
    )
}

export default Services
