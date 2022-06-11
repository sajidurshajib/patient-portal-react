import { faHospital, faMedkit, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Services.module.css'

const Services = () => {
    return (
        <div className={classes.Services}>
            <div>
                <p>
                    <FontAwesomeIcon icon={faMedkit} /> Medicine Delivery
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate? Lorem ipsum dolor
                    sit amet.
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faUserMd} /> Telemedicine
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate? Lorem ipsum dolor
                    sit amet.
                </p>
            </div>
            <div>
                <p>
                    <FontAwesomeIcon icon={faHospital} /> 24x7 Service
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate? Lorem ipsum dolor
                    sit amet.
                </p>
            </div>
        </div>
    )
}

export default Services
