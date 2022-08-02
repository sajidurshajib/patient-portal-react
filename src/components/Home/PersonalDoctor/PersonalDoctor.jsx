import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Doctor from '../../../assets/img/doc/docstock.jpg'
import classes from './PersonalDoctor.module.css'

export default function PersonalDoctor() {
    return (
        <div className={classes.container}>
            <p>Your Family Doctor</p>
            <div className={classes.flexWrapper}>
                <div>
                    <img src={Doctor} alt="" />
                    <p>
                        5.0 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '8px' }} />
                    </p>
                </div>
                <div>
                    <p>Dr. Rashadul Hasan</p>
                    <span>5+ years experience</span>
                </div>
            </div>
        </div>
    )
}
