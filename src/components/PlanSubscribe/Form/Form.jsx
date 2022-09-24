// import Image from 'next/image'
import React, { useState } from 'react'
import BG from '../../../assets/img/background1.png'
// import BG from '../../../assets/img/background.jpg'
// import BG from '../../../assets/img/background.jpg'
import FBG2 from '../../../assets/img/background_flower.jpg'
import Comment from '../../../assets/img/comment.png'
import FBG from '../../../assets/img/dark-blue-banner.jpg'
import DarkBlueBG from '../../../assets/img/dark_blue_background.jpg'
import FBG1 from '../../../assets/img/flowerBackground.jpg'
import HealthPackage from '../../../assets/img/health_package9.jpg'
import Member from '../../../assets/img/male.png'
import Mobile from '../../../assets/img/mobile-payment.png'
import Taka from '../../../assets/img/taka.png'
import Time from '../../../assets/img/time.png'
// import Login from '../../Login/Login'
import Register from '../../Register/Register'
import classes from './Form.module.css'
// import LogIn from './LogInAndRegistration/LogIn'
import LogIn from './Popup/LoginPopup/LoginPopup'
import Popup from './Popup/Popup'

// import SignUp from './SignUp/SignUp'

export default function Form({ plans, singlePlan, setPlanId }) {
    // const [planGet, setPlanGet] = useState({})
    //this from  projet folder
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)

    const show1 = () => {
        setShow(!show)
        setVisible(false)
    }

    const show2 = () => {
        setVisible(!visible)
        setShow(false)
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div
                        style={
                            {
                                // background: `url(${BG})`,
                                // backgroundPosition: "center",
                                // backgroundSize: "cover",
                                // height: "80vh",
                                // backgroundRepeat: "no-repeat",
                                // height: "100vh",
                            }
                        }>
                        <h2> Get Your best health plan , here</h2>
                        {/* img */}
                        <img src={BG} />
                    </div>

                    <div>
                        {/* first div */}
                        <div>
                            <div>
                                <label>Select Your Plan</label>
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
                        {/* Second  div */}

                        <div>
                            {/* ====== Plan Duration ========= */}
                            <div>
                                <div>
                                    <label htmlFor="planDescription">Plan Duration </label>
                                </div>

                                <div className={classes.input}>
                                    <label className={classes.txtFeild}> {singlePlan.days}</label>
                                    <div>
                                        <img className={classes.image1} src={Time} alt="" />{' '}
                                    </div>
                                </div>
                            </div>

                            {/* Plan Price  */}

                            <div>
                                <div>
                                    <label htmlFor="planPrice">Plan Price </label>
                                </div>

                                <div className={classes.input1}>
                                    <label className={classes.txtFeild}> {singlePlan.fee}</label>
                                    <img className={classes.image} src={Taka} alt="" />{' '}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="totalPatient">Total Patient</label>
                                </div>

                                <div className={classes.input2}>
                                    <label className={classes.txtFeild}> {singlePlan.total_patients}</label>

                                    <img className={classes.image} src={Member} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* third div  */}

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
                                <img src={Mobile} alt="" />
                            </div>{' '}
                        </div>

                        {/* forth div  */}

                        <div>
                            <div>
                                <label htmlFor="question"> Remarks</label>
                            </div>

                            <div>
                                <textarea name="question" id="question"></textarea>

                                <img src={Comment} alt="" />
                            </div>
                        </div>

                        {/* fifth div  */}
                        <div className={classes.last}>
                            <button className={classes.button} type="submit">
                                Submit
                            </button>
                        </div>

                        {/* for sign up and sign in button */}

                        <div>
                            <button onClick={() => show1()}>Sign in</button>
                            <span> Don't have an account ?</span>
                            <button onClick={() => show2()}>Sign Up</button>
                        </div>
                    </div>
                </div>
                {/* outSide the wrapper div  */}
            </div>
            {show && <div className={classes.signIn}>{<Popup />}</div>}
            {/* {visible && (
                <div className={classes.register}>
                    <div className={classes.cross}>Xssss</div>
                    <Popup />
                </div>
            )} */}
        </>
    )
}
