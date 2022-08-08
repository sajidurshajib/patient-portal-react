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
                            <span>Easy access to the personal medical history & record of the patient.</span>
                            <div>
                                <li> Prescription Record</li>
                                <li> Medicine Record</li>
                                <li> Medical & Vaccination Report</li>
                                <li> Record Share with Doctor</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={F2} alt="" />
                        <div>
                            <h2>Health Indicator Tracking</h2>
                            <span>Track your health status by updating following Health indicator.</span>
                            <div>
                                <li> Blood Pressure Measuring</li>
                                <li> Blood Sugar Monitoring</li>
                                <li> Pulse & Oxygen Saturation</li>
                                <li> Health Indicator for Assessment</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={F3} alt="" />
                        <div>
                            <h2>Find Doctor</h2>
                            <span>Easily access to the largest Doctor pool with 30+ specialty & 100+ doctors.</span>
                            <div>
                                <li> Doctor Search</li>
                                <li> Appointment Booking</li>
                                <li> Instant E-Prescription</li>
                                <li> Save Data Lifetime</li>
                            </div>
                        </div>
                    </p>
                </div>

                <div>
                    <p>
                        <img src={F4} alt="" />
                        <div>
                            <h2>Medicine Order</h2>
                            <span>Search medicine, place your online order for hassle free home delivery.</span>
                            <div>
                                <li> DGDA Approved 22000+ Medicine</li>
                                <li> Price Comparison Feature</li>
                                <li> Fast Home Delivery</li>
                                <li> One Click Order</li>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}
