import React from 'react'
import PDF from '../../../assets/img/social/pdf.png'
import classes from './Medication.module.css'

export default function Medication() {
    return (
        <div className={classes.wrapper}>
            <p>Medicine/Medication Records</p>
            <div className={classes.container}>
                <div className={classes.btnContainer}>
                    <button>Upload</button>
                </div>
                <div className={classes.files}>
                    <div>
                        <div>
                            <img src={PDF} alt="file" />
                            <p>
                                <span>Medication.pdf</span>
                            </p>
                            <p>30-July-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
