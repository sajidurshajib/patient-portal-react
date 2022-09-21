// import Image from 'next/image'
import React, { useState } from 'react'
// import BG from '../../../assets/img/background.jpg'
import BG from '../../../assets/img/background.jpg'
import FBG2 from '../../../assets/img/background_flower.jpg'
import FBG from '../../../assets/img/dark-blue-banner.jpg'
import DarkBlueBG from '../../../assets/img/dark_blue_background.jpg'
import FBG1 from '../../../assets/img/flowerBackground.jpg'
import HealthPackage from '../../../assets/img/health_package9.jpg'
import classes from './Form.module.css'

export default function Form({ plans, singlePlan, setPlanId }) {
    // const [planGet, setPlanGet] = useState({})

    return (
        <div className={classes.container} style={{}}>
            <div className={classes.heading}>{/* <h2> Select your health Plan</h2> */}</div>
            <div className={classes.wrapper}>
                <div>
                    <p>Select Your Health Plan</p>
                </div>

                <div className={classes.formSection}>
                    <div
                        style={{
                            background: `url(${HealthPackage})`,

                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '80vh',
                            backgroundRepeat: 'no-repeat',
                        }}>
                        <p>Get your best health plan , here</p>
                        <div> </div>
                    </div>
                    <div>
                        <form className={classes.form} method="GET">
                            <div>
                                <div>
                                    <div>
                                        <label>Select Plan</label>
                                    </div>

                                    <div>
                                        {/* Mapping and On change  */}
                                        <select
                                            className={classes.label1}
                                            onChange={(e) => setPlanId(parseInt(e.target.value))}>
                                            <option value="">Select Plan</option>
                                            {plans &&
                                                plans.map((plan) => (
                                                    <option value={plan.id}>
                                                        {plan.name} Basic - {plan.days / 30}M
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* ======== for first div ========= */}
                                <div>
                                    {/* ====== Plan Duration ========= */}
                                    <div>
                                        <div>
                                            <label htmlFor="planDescription">Plan Duration </label>
                                        </div>

                                        <div className={classes.input}>
                                            <label className={classes.txtFeild}>{singlePlan.days}</label>
                                        </div>
                                    </div>

                                    {/* Plan Price  */}

                                    <div>
                                        <div>
                                            <label htmlFor="planPrice">Plan Price </label>
                                        </div>

                                        <div className={classes.middle}>
                                            <label className={classes.txtFeild}>{singlePlan.fee}</label>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label htmlFor="totalPatient">Total Patient</label>
                                        </div>

                                        <div className={classes.input}>
                                            <label className={classes.txtFeild}>{singlePlan.total_patients}</label>
                                        </div>
                                    </div>
                                </div>

                                {/* For the second div  */}

                                <div></div>

                                <div>
                                    {/* ====== Select Palyment Method  ========= */}

                                    <div>
                                        <div>
                                            <label htmlFor="payment"> Select Payment Method</label>
                                        </div>

                                        <div>
                                            <select name="payment" id="payment">
                                                <option value="bkash"> bkash</option>
                                                <option value="rocket">rocket</option>
                                                <option value="nagad">nagad</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* ====== Any Question========= */}

                                    <div></div>

                                    <div></div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="question"> Remarks</label>
                                    </div>

                                    <div>
                                        <textarea name="question" id="question"></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* submit button  */}

                            <div className={classes.last}>
                                <button className={classes.button} type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
