import '@fortawesome/free-solid-svg-icons'
import { faCapsules, faChartLine, faFolderOpen, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Feature.module.css'

export default function Feature() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <h1>Features</h1>
            </div>
            <div className={classes.grid}>
                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faFolderOpen} />
                        </span>
                        <p>Personal Health Record</p>
                    </p>
                    <span>
                        Easy access to the personal medical history & record of the patient, helps the doctor provide
                        more efficient, accurate, and appropriate care for patient.
                    </span>
                    <div>
                        <p> &#8211; Prescription Record</p>
                        <p> &#8211; Medical & Vaccination Report</p>
                        <p> &#8211; Medicine Record</p>
                        <p> &#8211; Record Share with Doctor</p>
                    </div>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        <p>Health Indicator Tracking</p>
                    </p>
                    <span>Track your health status by updating following Health indicator.</span>
                    <div>
                        <p> &#8211; Blood Pressure Measuring</p>
                        <p> &#8211; Blood Sugar Monitoring</p>
                        <p> &#8211; Pulse & Oxygen Saturation</p>
                        <p> &#8211; Health Indicator for Assessment</p>
                    </div>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faStethoscope} />
                        </span>
                        <p>Find Doctor</p>
                    </p>
                    <span>
                        Easily access to the largest Doctor pool with 30+ different specialty & 1000+ doctor profile.
                    </span>
                    <div>
                        <p> &#8211; Doctor Search</p>
                        <p> &#8211; Appointment Booking</p>
                        <p> &#8211; Instant E-Prescription</p>
                        <p> &#8211; Save Data Lifetime</p>
                    </div>
                </div>

                <div>
                    <p>
                        <span>
                            <FontAwesomeIcon icon={faCapsules} />
                        </span>
                        <p>Medicine Order</p>
                    </p>
                    <span>Search your medicine name, place your online order with hassle free home delivery.</span>
                    <div>
                        <p> &#8211; DGDA Approved 22000+ Medicine</p>
                        <p> &#8211; Fast Home Delivery</p>
                        <p> &#8211; Price Comparison Feature</p>
                        <p> &#8211; One Click Order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
