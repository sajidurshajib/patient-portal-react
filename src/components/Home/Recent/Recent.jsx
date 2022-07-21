import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Recent.module.css'

export default function Recent() {
    return (
        <div className={classes.wrapper}>
            <p>Recent Reports</p>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faFilePdf} className={classes.icon} />
                    <span>Medical_report.pdf</span>
                </p>

                <p>Detail Info</p>
                <p>29-June-2022</p>
                <button>Download</button>
            </div>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faFilePdf} className={classes.icon} />
                    <span>Vaccine_report.pdf</span>
                </p>

                <p>Detail Info</p>
                <p>28-June-2022</p>
                <button>Download</button>
            </div>
        </div>
    )
}
