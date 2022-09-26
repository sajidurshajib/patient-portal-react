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
    const [show, setShow] = useState(false)

    // use state for the form element
    const [payment, setPayment] = useState('')
    const [remarks, setRemarks] = useState('')

    const ShowPopup = () => {
        setShow(true)
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div>
                        <h2> Get Your best health plan , here</h2>
                        {/* img */}
                        <img src={BG} />
                    </div>

                    <div className={classes.formWrapper}>
                        {/* form started  */}
                        <form className={classes.form} action="">
                            {/* first  div */}
                            <div>
                                <div>
                                    <label>Select Your Plan</label>
                                </div>

                                <div>
                                    {/* Mapping and On change  */}
                                    <select
                                        className={classes.label1}
                                        onChange={(e) => setPlanId(parseInt(e.target.value))}>
                                        <option value="0">Select Plan</option>
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
                                {/* {Plan duration } */}
                                <div>
                                    <div>
                                        <label htmlFor="planDescription">Plan Duration </label>
                                    </div>

                                    <div className={classes.input}>
                                        <div>
                                            <img className={classes.image1} src={Time} alt="" />{' '}
                                        </div>
                                        <label className={classes.txtFeild}> {singlePlan.days}</label>
                                    </div>
                                </div>
                                {/* {Plan Price } */}
                                <div>
                                    <div>
                                        <label htmlFor="planPrice">Plan Price </label>
                                    </div>

                                    <div className={classes.input1}>
                                        <img className={classes.image} src={Taka} alt="" />{' '}
                                        <label className={classes.txtFeild}> {singlePlan.fee}</label>
                                    </div>
                                </div>
                                {/* {Total Patient */}
                                <div>
                                    <div>
                                        <label htmlFor="totalPatient">Total Patient</label>
                                    </div>

                                    <div className={classes.input2}>
                                        <img className={classes.image} src={Member} alt="" />
                                        <label className={classes.txtFeild}> {singlePlan.total_patients}</label>
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
                                        <option value="bkash"> Bkash</option>
                                        <option value="rocket">Rocket</option>
                                        <option value="nagad">Nagad</option>
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
                                </div>
                            </div>

                            {/* fifth div  */}
                            <div className={classes.last}>
                                <button className={classes.button} type="submit">
                                    Place Order
                                </button>
                            </div>
                            {/* form ends  */}
                        </form>

                        {/* for sign up and sign in button */}

                        <div className={classes.sixDiv}>
                            <button onClick={() => ShowPopup()}>Sign in</button>
                        </div>
                    </div>
                </div>
                {/* outSide the wrapper div  */}
            </div>
            {show && <div className={classes.signIn}>{<Popup setShow={setShow} />}</div>}
        </>
    )
}
