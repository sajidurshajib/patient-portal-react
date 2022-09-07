import { faBars, faHome, faServer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileSide from '../MobileSide/MobileSide'
import classes from './MobileNav.module.css'

export default function MobileNav() {
    const [state, setState] = useState(2)
    const [sideOpen, setSideOpen] = useState(false)

    return (
        <div className={classes.mobileNav}>
            <div className={classes.navigation}>
                <ul>
                    {/* <li
                        className={state === 1 ? `${classes.list} ${classes.active}` : classes.list}
                        onClick={() => setState(1)}> */}
                    <li className={classes.list}>
                        <Link to="/home">
                            <span className={classes.icon}>
                                <FontAwesomeIcon icon={faServer} />
                            </span>
                            <span className={classes.text}>Service</span>
                        </Link>
                    </li>
                    <li
                        className={state === 2 ? `${classes.list} ${classes.active}` : classes.list}
                        onClick={() => setState(2)}>
                        <Link to="/home">
                            <span className={classes.icon}>
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                            <span className={classes.text}>Home</span>
                        </Link>
                    </li>
                    <li className={classes.list}>
                        <a>
                            <span className={classes.icon}>
                                <FontAwesomeIcon icon={faBars} onClick={() => setSideOpen(!sideOpen)} />
                            </span>
                            <span className={classes.text}>Menu</span>
                        </a>
                    </li>
                    <div className={classes.indicator}></div>
                </ul>
            </div>
            {sideOpen && <MobileSide setSideOpen={setSideOpen} />}
        </div>
    )
}
