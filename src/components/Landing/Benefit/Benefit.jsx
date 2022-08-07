import '@fortawesome/free-solid-svg-icons'
import { faFileMedical, faHeartbeat, faLightbulb, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Benefit.module.css'

export default function Benefit() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <h1>Benefits</h1>
            </div>
            <div className={classes.gridBox}>
                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faHeartbeat} />
                        </span>
                        <p>Track and Assess Your Health</p>
                    </p>
                    <span>Record and track your progress toward your health goals.</span>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faFileMedical} />
                        </span>
                        <p>Personal & Family Health Record</p>
                    </p>
                    <span>
                        Review, Upload & Store your current & Previous unlimited personal medical record and family
                        information at a glance.
                    </span>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faLightbulb} />
                        </span>
                        <p>Right Decision Making</p>
                    </p>
                    <span>
                        Count on our experts to deliver an accurate diagnosis and the right plan for your betterment.
                    </span>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faTemperatureHigh} />
                        </span>
                        <p>Emergency Care</p>
                    </p>
                    <span>
                        You can get the emergency care of doctor consultation you need 24/7 anytime, anywhere through
                        online.
                    </span>
                </div>
            </div>
        </div>
    )
}
