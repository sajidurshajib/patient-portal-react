// import Image from 'next/image'
import React, { useState, useContext } from 'react'
import { Auth, UserInfo } from '../../../allContext'
import BG from '../../../assets/img/background1.png'
import Member from '../../../assets/img/male.png'
import Mobile from '../../../assets/img/mobile-payment.png'
import Taka from '../../../assets/img/taka.png'
import Time from '../../../assets/img/time.png'
import { dateTime } from '../../../utils/date'
import classes from './Form.module.css'
import Popup from './Popup/Popup'

// import SignUp from './SignUp/SignUp'

export default function Form({ plans, singlePlan, setPlanId }) {
    const [show, setShow] = useState(false)

    const [payment, setPayment] = useState('')
    const [remarks, setRemarks] = useState('')

    const ShowPopup = () => {
        setShow(true)
    }

    const apiV1 = process.env.REACT_APP_API_V1
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const refreshPage = () => {
        window.location.reload()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            service: {
                service_name: 'health_plan',
                patient_id: userDetail?.id,
                order_placement: dateTime,
                order_completion: null,
                remarks: remarks,
                current_address: '',

                order_value: singlePlan.fee,
                order_status: 'pending',
                discount_percent: 0,
                payable_amount: singlePlan.fee,
                payment_by_customer: 0,
                payment_pending: singlePlan.fee,
                last_payment_date: null,
                payment_method: payment,
                payment_status: 'pending',

                service_provider_type: 'doctor',
                service_provider_id: 1,
                service_provider_fee: 0,
                service_provider_fee_paid: 0,
                service_provider_fee_pending: 0,
                service_provider_fee_last_update: null,
                service_provider_fee_status: '',

                referral_type: null,
                referral_id: 1,
                referral_provider_fee: 0,
                referral_provider_fee_paid: 0,
                referral_provider_fee_pending: 0,
                referral_provider_fee_last_update: 0,
                referral_provider_fee_status: null,
            },
            health_plan_subscribe: {
                user_id: userDetail?.id,
                register_by_id: userDetail?.id,
                discount_percent: 0,
                days: singlePlan.days,
                fixed_amount: true,
                amount: singlePlan.fee,
            },
        }

        let postFetch = await fetch(`${apiV1}/patients/healthplan/subscribe?voucher_code=${singlePlan?.voucher_code}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })
        let response = await postFetch.json()
        if (response.detail === 'Not authenticated') {
            setShow(true)
        } else {
            setShow(false)
        }

        if (postFetch.ok) {
            refreshPage()
        }
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div>
                        <h2> Get Your best health plan , here</h2>
                        <img src={BG} alt="" />
                    </div>

                    <div className={classes.formWrapper}>
                        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <div>
                                    <label>Select Your Plan</label>
                                </div>

                                <div>
                                    <select
                                        className={classes.label1}
                                        onChange={(e) => setPlanId(parseInt(e.target.value))}
                                        required>
                                        <option value="">Select Plan</option>
                                        {plans &&
                                            plans.map((plan) =>
                                                plan.plan_type === 'health_plan' ? (
                                                    <option value={plan.id}>
                                                        {plan.name} -{' '}
                                                        {Math.floor(plan.days / 30) === 0
                                                            ? 1
                                                            : Math.floor(plan.days / 30)}{' '}
                                                        {plan.days / 30 > 1
                                                            ? 'Months'
                                                            : Math.floor(plan.days / 30) === 0
                                                            ? 'Day'
                                                            : 'Month'}{' '}
                                                    </option>
                                                ) : (
                                                    ''
                                                )
                                            )}
                                    </select>
                                </div>
                            </div>

                            <div>
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
                                <div>
                                    <div>
                                        <label htmlFor="planPrice">Plan Price </label>
                                    </div>

                                    <div className={classes.input1}>
                                        <img className={classes.image} src={Taka} alt="" />{' '}
                                        <label className={classes.txtFeild}> {singlePlan.fee}</label>
                                    </div>
                                </div>
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

                            <div>
                                <div>
                                    <label htmlFor="payment"> Select Payment Method</label>
                                </div>
                                <div>
                                    <select onChange={(e) => setPayment(e.target.value)} required>
                                        <option value="">Select</option>
                                        <option value="bkash"> Bkash</option>
                                        <option value="rocket">Rocket</option>
                                        <option value="nagad">Nagad</option>
                                    </select>
                                    <img src={Mobile} alt="" />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="question">Remarks</label>
                                </div>

                                <div>
                                    <textarea
                                        className={classes.textarea}
                                        rows={4}
                                        onChange={(e) => setRemarks(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={classes.last}>
                                <button className={classes.button} type="submit">
                                    Place Order
                                </button>
                            </div>
                        </form>

                        <div className={classes.sixDiv}>
                            <button onClick={() => ShowPopup()}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            {show && <div className={classes.signIn}>{<Popup setShow={setShow} />}</div>}
        </>
    )
}
