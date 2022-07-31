import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Recent.module.css'

export default function Recent() {
    return (
        <div className={classes.wrapper}>
            <p>Recent Prescription</p>
            <table className={classes.tableWrapper}>
                <tr>
                    <td>
                        <FontAwesomeIcon icon={faFilePdf} className={classes.icon} />
                        <span>Medical_prescription.pdf</span>
                    </td>

                    <td>Detail Info</td>
                    <td>29-June-2022</td>
                    <td>
                        <button>Download</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FontAwesomeIcon icon={faFilePdf} className={classes.icon} />
                        <span>Medical_prescription.pdf</span>
                    </td>

                    <td>Detail Info</td>
                    <td>29-June-2022</td>
                    <td>
                        <button>Download</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
