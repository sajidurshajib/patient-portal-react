import '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={classes.container}>
                <p> Menus </p>
                <Link to="#">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </Link>
                <Link to="#">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Doctor</span>
                </Link>
                <Link to="#">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Test</span>
                </Link>
                <Link to="#">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Sample</span>
                </Link>
                <Link to="#">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Order</span>
                </Link>
            </div>
        </div>
    )
}
