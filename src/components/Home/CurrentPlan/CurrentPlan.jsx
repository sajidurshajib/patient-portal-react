import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './CurrentPlan.module.css'

export default function CurrentPlan() {
    return (
        <div className={classes.wrapper}>
            <p>Current Health Plan</p>
            <table className={classes.tableWrapper}>
                <tr>
                    <td>
                        <FontAwesomeIcon icon={faHospitalUser} className={classes.icon} />
                        <span>Family Health Plan (FHP)</span>
                    </td>
                    <td>4 Peoples</td>
                    <td>3 Months</td>
                    <td>29-Jun-2022 to 29-Sep-2022</td>
                    <td>
                        <button>Details</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
