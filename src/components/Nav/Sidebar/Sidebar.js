import {
    faCog,
    faHome,
    faUser,
    faSignOutAlt,
    faNotesMedical,
    faBriefcaseMedical,
    faThermometer,
    faCapsules,
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
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <Link to="/">
                    <img src={img} alt="" />
                    <h2>
                        My <span>Health</span> Portal
                    </h2>
                </Link>
            </div>
            <ul>
                <li className={location.pathname === '/home' ? classes.active : ''}>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} className={classes.marginIcon1} />
                        <span className={classes.textMargin1}>Home</span>
                    </Link>
                </li>
                <li className={location.pathname === '/profile' ? classes.active : ''}>
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faUser} className={classes.marginIcon2} /> <span>My Profile</span>
                    </Link>
                </li>

                <li className={location.pathname === '/medicals' ? classes.active : ''}>
                    <Link to="/medicals">
                        <FontAwesomeIcon icon={faNotesMedical} className={classes.marginIcon3} />
                        <span className={classes.textMargin2}>Medical Records</span>
                    </Link>
                </li>
                <li className={location.pathname === '/indicators' ? classes.active : ''}>
                    <Link to="/indicators">
                        <FontAwesomeIcon icon={faThermometer} />
                        <span className={classes.textMargin3}>Health Indicators</span>
                    </Link>
                </li>
                <li className={location.pathname === '/medicines' ? classes.active : ''}>
                    <Link to="/medicines">
                        <FontAwesomeIcon icon={faCapsules} />
                        <span>Medicine Order</span>
                    </Link>
                </li>
                <li className={location.pathname === '/doctors' ? classes.active : ''}>
                    <Link to="/doctors">
                        <FontAwesomeIcon icon={faBriefcaseMedical} /> <span>Find Doctors</span>
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
