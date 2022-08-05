import '@fortawesome/free-solid-svg-icons'
import {
    faHome,
    faUser,
    faNotesMedical,
    faThermometer,
    faCapsules,
    faBriefcaseMedical,
    faCog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import classes from './SidebarV2.module.css'

export default function SidebarV2() {
    let location = useLocation()

    return (
        <div className={classes.sidebar}>
            <div className={classes.container}>
                <p>My Health Portal</p>
                <Link to="/home" className={location.pathname === '/home' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faHome} className={classes.marginIcon1} />
                    <span className={classes.textMargin1}>Home</span>
                </Link>
                <Link to="/doctors" className={location.pathname === '/doctors' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faBriefcaseMedical} /> <span>Find Doctors</span>
                </Link>
                <Link to="/medicines" className={location.pathname === '/medicines' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faCapsules} />
                    <span>Medicine Order</span>
                </Link>
                <Link to="/medicals" className={location.pathname === '/medicals' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faNotesMedical} className={classes.marginIcon3} />
                    <span className={classes.textMargin2}>Medical Records</span>
                </Link>
                <Link to="/indicators" className={location.pathname === '/indicators' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faThermometer} />
                    <span className={classes.textMargin3}>Health Indicators</span>
                </Link>
                <Link to="/profile" className={location.pathname === '/profile' ? classes.active : ''}>
                    <FontAwesomeIcon icon={faUser} className={classes.marginIcon2} /> <span>My Profile</span>
                </Link>

                <div className={classes.setting}>
                    <Link to="/settings" className={location.pathname === '/settings' ? classes.active : ''}>
                        <FontAwesomeIcon icon={faCog} className={classes.marginIcon2} /> <span>Settings</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
