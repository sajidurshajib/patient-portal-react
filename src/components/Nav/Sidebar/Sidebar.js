import {
    faCog,
    faHome,
    faUser,
    faSignOutAlt,
    faNotesMedical,
    faBriefcaseMedical,
    faThermometer,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import img from '../.././../assets/img/logo.svg'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const { dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    let location = useLocation()

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    return (
        <div className={classes.Sidebar}>
            <div className={classes.header}>
                <Link to="/">
                    <img src={img} alt="" />
                    <h2>
                        My <span>Health</span> Portal
                    </h2>
                </Link>
            </div>
            <ul>
                <li className={location.pathname === '/' ? classes.active : ''}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li className={location.pathname === '/profile' ? classes.active : ''}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} className={classes.marginIcon1} /> <span>Profile</span>
                    </Link>
                </li>
                <li className={location.pathname === '/doctors' ? classes.active : ''}>
                    <Link to="/doctors">
                        <FontAwesomeIcon icon={faBriefcaseMedical} /> <span>Find Doctors</span>
                    </Link>
                </li>
                <li className={location.pathname === '/medicals' ? classes.active : ''}>
                    <Link to="/medicals">
                        <FontAwesomeIcon icon={faNotesMedical} className={classes.marginIcon2} />
                        <span>Medical Reports</span>
                    </Link>
                </li>
                <li className={location.pathname === '/indicators' ? classes.active : ''}>
                    <Link to="/indicators">
                        <FontAwesomeIcon icon={faThermometer} /> <span>Indicators</span>
                    </Link>
                </li>
            </ul>

            <ul className={classes.secondUl}>
                <li className={location.pathname === '/settings' ? classes.active : ''}>
                    <Link to="/settings">
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <span onClick={(e) => logout(e)}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> <span className={classes.logout}>Logout</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
