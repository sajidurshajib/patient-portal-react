import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import desktop from '../../../assets/img/desktop-telemedicine.jpg'
import classes from './Detail.module.css'

const Detail = () => {
    return (
        <div className={classes.Detail}>
            <div className={classes.imgDiv}>
                <div
                    style={{
                        background: `url(${desktop})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '300px',
                    }}></div>
            </div>
            <div>
                <h2>Your Health Portal</h2>
                <p>
                    My health portal offers every individual with assigned personal family doctor for 24X 7, largest
                    pool of 1000+ renown doctors from 30+ different specialties, Personal health record, Medical record
                    history, Medicine Delivery, pathological lab test detail & booking facility, health plan & package,
                    Health education content and many more.
                </p>
                <h3>Your Services</h3>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Save your health data.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Get your e-prescription.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Buy medicine from online.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> 24x7 family doctor service.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Detail
