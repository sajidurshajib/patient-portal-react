import React from 'react'
import F3 from '../../../assets/img/feature/f3.jpg'
import F1 from '../../../assets/img/feature/f11.png'
import F2 from '../../../assets/img/feature/f22.jpg'
import F4 from '../../../assets/img/feature/f444.png'
import classes from './Feature.module.css'

export default function Feature() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <h1>Features of My Health Portal</h1>
            </div>
            <div className={classes.grid}>
                <div>
                    <p>
                        <img src={F1} alt="" />
                        <div>
                            <h2>Personal Health Record</h2>
                            <span>Easy access to the personal medical history & record of the patient</span>
                            <div>
                                <span> - Prescription Record</span>
                                <span> - Medicine Record</span>
                                <span> - Medical & Vaccination Report</span>
                                <span> - Record Share with Doctor</span>
                            </div>
                        </div>
                    </p>
                </div>
                {/* first div done */}

                <div>
                    <p>
                        <div>
                            <h2>Health Indicator Tracking</h2>
                            <span>Track your health status by updating following Health indicator</span>
                            <div>
                                <span>Blood Pressure Measuring - </span>
                                <span>Blood Sugar Monitoring - </span>
                                <span>Pulse & Oxygen Saturation - </span>
                                <span>Health Indicator for Assessment - </span>
                            </div>
                        </div>
                        <img src={F2} alt="" />
                    </p>
                </div>
                {/* Second  div done */}
                <div>
                    <p>
                        <img src={F3} alt="" />
                        <div>
                            <h2>Find Doctor</h2>
                            <span>Easily access to the largest Doctor pool with 30+ specialty & 100+ doctors</span>
                            <div>
                                <span> - Doctor Search</span>
                                <span> - Appointment Booking</span>
                                <span> - Instant E-Prescription</span>
                                <span> - Save Data Lifetime</span>
                            </div>
                        </div>
                    </p>
                </div>
                {/* Third div done */}
                <div>
                    <p>
                        <div>
                            <h2>Medicine Order</h2>
                            <span>Search medicine, place your online order for hassle free home delivery</span>
                            <div>
                                <span>DGDA Approved 22000+ Medicine - </span>
                                <span>Price Comparison Feature - </span>
                                <span>Fast Home Delivery - </span>
                                <span>One Click Order - </span>
                            </div>
                        </div>
                        <img src={F4} alt="" />
                    </p>
                </div>
                {/* Forth div done */}
            </div>
        </div>
    )
}
