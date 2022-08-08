import { faCapsules, faChartLine, faFileMedicalAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons'
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
                    <FontAwesomeIcon icon={faChartLine} /> Health Indicator Tracking
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faStethoscope} /> Find Doctor
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faCapsules} /> Medicine Order
                </p>
            </div>
        </div>
    )
}

export default Services
