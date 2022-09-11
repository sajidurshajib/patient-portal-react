import '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Doc from '../../../assets/img/doc/doctor.jpg'
import classes from './Popup.module.css'

export default function Popup() {
    return (
        <div className={classes.float}>
            <div className={classes.trigger}>
                <FontAwesomeIcon icon={faStethoscope} />
                {/* <img src={Doc} alt="" /> */}
            </div>
            {/* <div className={classes.actions}>
                <div className={classes.info}>
                    <div className={classes.image}>
                        <img src="https://via.placeholder.com/64x64" alt="" />
                    </div>
                    <div className={classes.phone}></div>
                    <div className={classes.whatsapp}></div>
                    <div className={classes.tooltip}>
                        <p>Alfred Pennyworth</p>
                        <small>Butler</small>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
