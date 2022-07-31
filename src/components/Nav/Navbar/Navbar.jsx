import '@fortawesome/free-solid-svg-icons'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/img/logo/Logo192.png'
import Pic from '../../../assets/img/patient1.jpeg'
import classes from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Link to="/home">
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    My <span>Health</span>
                </p>
            </div>

            <div className={classes.searchhWrap}>
                <div className={classes.search}>
                    <input
                        type="text"
                        className={classes.searchTerm}
                        placeholder="search doctor by specialty, location or name"
                    />
                    <button type="submit" className={classes.searchButton}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div className={classes.icon}>
                <p>
                    <FontAwesomeIcon icon={faBell} />
                    <div className={classes.notification}>
                        <p>Notication 1</p>
                        <p>Notication 2</p>
                    </div>
                </p>
                <span>
                    <img src={Pic} alt="" />
                    <div className={classes.user}>
                        <span>Morshedul Antor</span>
                        <Link to="/settings">
                            <p>Settings</p>
                        </Link>
                        <p>Logout</p>
                    </div>
                </span>
            </div>
        </div>
    )
}
