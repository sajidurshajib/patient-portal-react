import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from '../../Resource'
import classes from './PrescriptionList.module.css'

export default function PrescriptionList({ prescriptions }) {
    return (
        <div className={classes.list}>
            <Table>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Doctor Name</th>
                        <th>Cause of Consultation</th>
                        <th>Date</th>
                        <th>Remarks</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions[1] &&
                        prescriptions[1].map((prescription, index) => (
                            <tr key={index} className={classes.row}>
                                <td>{index + 1}</td>
                                <td>{prescription.doctor_name}</td>
                                <td>{prescription.cause_of_consultation}</td>
                                <td>{prescription.created_at !== null ? prescription.created_at.slice(0, 10) : '-'}</td>
                                <td>{prescription.remarks}</td>
                                <td>
                                    <a href={`https://ep.healthxbd.com/ep/hxep${prescription.id}`}>
                                        <button>Click</button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}
