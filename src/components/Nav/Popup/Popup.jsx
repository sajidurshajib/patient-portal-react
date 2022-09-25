import '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Doc from '../../../assets/img/doc/doctor.jpg'
import classes from './Popup.module.css'

export default function Popup() {
    return (
        <div className={classes.float}>
            <Link to="/doctor/4305">
                <div className={classes.trigger}>
                    <FontAwesomeIcon icon={faStethoscope} />
                    {/* <img src={Doc} alt="" /> */}
                </div>
                <p>আমার ডাক্তার</p>
            </Link>
        </div>
    )
}
