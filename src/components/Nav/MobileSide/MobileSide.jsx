import {
    faHome,
    faUser,
    faNotesMedical,
    faBriefcaseMedical,
    faThermometer,
    faCapsules,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classes from './MobileSide.module.css'

export default function MobileSide({ setSideOpen }) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.overlay} onClick={() => setSideOpen(false)}></div>
            <div className={classes.sidebar}>
                <div className={classes.container}>
                    <p>My Health Portal</p>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} className={classes.marginIcon1} />
                        <span className={classes.textMargin1}>Home</span>
                    </Link>
                    <Link to="/doctors">
                        <FontAwesomeIcon icon={faBriefcaseMedical} /> <span>Find Doctors</span>
                    </Link>
                    <Link to="/medicines">
                        <FontAwesomeIcon icon={faCapsules} />
                        <span>Medicine Order</span>
                    </Link>
                    <Link to="/medicals">
                        <FontAwesomeIcon icon={faNotesMedical} className={classes.marginIcon3} />
                        <span className={classes.textMargin2}>Medical Records</span>
                    </Link>
                    <Link to="/indicators">
                        <FontAwesomeIcon icon={faThermometer} />
                        <span className={classes.textMargin3}>Health Indicators</span>
                    </Link>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} className={classes.marginIcon2} /> <span>My Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
