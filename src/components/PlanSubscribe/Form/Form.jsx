// import Image from 'next/image'
import React from 'react'
// import BG from '../../../assets/img/background.jpg'
import BG from '../../../assets/img/background.jpg'
import FBG2 from '../../../assets/img/background_flower.jpg'
import FBG from '../../../assets/img/dark-blue-banner.jpg'
import DarkBlueBG from '../../../assets/img/dark_blue_background.jpg'
import HealthPackage from '../../../assets/img/family_health_plan.png'
import FBG1 from '../../../assets/img/flowerBackground.jpg'
import classes from './Form.module.css'

export default function Form() {
    return (
        <div
            className={classes.container}
            style={
                {
                    // background: `url(${BG})`,
                    // backgroundPosition: 'center',
                    // backgroundSize: 'cover',
                    // height: '100vh',
                }
            }>
            <div className={classes.heading}>{/* <h2> Select your health Plan</h2> */}</div>
            <div className={classes.wrapper}>
                <div>
                    <p>Select Your Health Plan</p>
                </div>

                <div className={classes.formSection}>
                    <div
                        style={{
                            background: `url(${FBG})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            height: '100vh',
                        }}>
                        <p>Get your best health plan , here</p>
                        <img src={HealthPackage} alt="" />
                    </div>
                    <div>
                        <form className={classes.form} method="GET">
                            <div>
                                <div>
                                    <div>
                                        <label for="payment">Select Plan</label>
                                    </div>

                                    <div>
                                        <select className={classes.label1} name="payment" id="payment">
                                            <option value="bkash"> My Health Plan (MHP) -Basic 1M </option>
                                            <option value="rocket"> My Health Plan (MHP) -Basic 3M </option>
                                            <option value="nagad"> My Health Plan (MHP) -Basic 6M </option>
                                            <option value="nagad"> My Health Plan (MHP) -Basic 12M </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* ======== for first div ========= */}
                                <div>
                                    {/* ====== for Name ========= */}
                                    {/* <div>
                                        <div>
                                            <label for="name">Plan Name</label>
                                        </div>

                                        <div className={classes.input}>
                                            <input type="text" name="name" id="name" placeholder="name" required />{' '}
                                            <label className={classes.txtFeild}></label>
                                        </div>
                                    </div> */}

                                    {/* ====== Plan Duration ========= */}
                                    <div>
                                        <div>
                                            <label for="planDescription">Plan Duration </label>
                                        </div>

                                        <div className={classes.input}>
                                            {/* <input
                                            type="text"
                                            name="planDescription"
                                            id="planDescription"
                                            placeholder=""
                                            required
                                        />{' '} */}
                                            <label className={classes.txtFeild}></label>
                                        </div>
                                    </div>

                                    {/* Plan Price  */}

                                    <div>
                                        <div>
                                            <label for="planPrice">Plan Price </label>
                                        </div>

                                        <div className={classes.middle}>
                                            {/* <input type="number" name="planPrice" id="planPrice" /> */}
                                            <label className={classes.txtFeild}></label>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label for="totalPatient">Total Patient</label>
                                        </div>

                                        {/* <div>
                                            <input type="number" name="totalPatient" id="age" min="1" max="200" />
                                        </div> */}
                                        <div className={classes.input}>
                                            {/* <input type="number" name="planPrice" id="planPrice" /> */}
                                            <label className={classes.txtFeild}></label>
                                        </div>
                                    </div>
                                </div>

                                {/* For the second div  */}

                                <div>
                                    {/* ====== for Phone ========= */}
                                    {/* <div>
                                        <div>
                                            <label for="phone">Phone</label>
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                placeholder="phone number"
                                                required
                                            />
                                        </div>
                                    </div> */}
                                </div>

                                {/* Plan duration  */}

                                {/* <div>
                                <div>Plan Duration</div>

                                <div>
                                    <div>
                                        <input type="radio" id="oneMonth" name="month" value="oneMonth" />
                                        <label for="oneMonth">1 month</label>
                                    </div>

                                    <div>
                                        <input type="radio" id="threeMonth" name="month" value="threeMonth" />
                                        <label for="threeMonth">3 month</label>
                                    </div>

                                    <div>
                                        <input type="radio" id="sixMonth" name="month" value="sixMonth" />
                                        <label for="sixMonth">6 month</label>
                                    </div>

                                    <div>
                                        <input type="radio" id="twelveMonth" name="month" value="threeMonth" />
                                        <label for="twelveMonth">12 month</label>
                                    </div>
                                </div>
                            </div> */}

                                {/* For the second div  */}

                                <div>
                                    {/* ====== Select Palyment Method  ========= */}

                                    <div>
                                        <div>
                                            <label for="payment"> Select Payment Method</label>
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
                                        <label for="question"> Remarks</label>
                                    </div>

                                    <div>
                                        <textarea name="question" id="question"></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* ====== for right Section of the form ========= */}

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
