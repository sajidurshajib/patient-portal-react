import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext } from 'react'
import { Auth } from '../../../../allContext'
import { UserInfo } from '../../../../allContext'
import { dateTime } from '../../../../utils/date'
import classes from './PlanForm.module.css'

export default function PlanForm({ setOpenForm, plan }) {
    const { stateAuth } = useContext(Auth)
    const { stateUser } = useContext(UserInfo)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const userDetail = stateUser.info
    const refreshPage = () => {
        window.location.reload()
    }

    const [payment, setPayment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            service: {
                service_name: 'health_plan',
                patient_id: userDetail?.id,
                order_placement: dateTime,
                order_completion: null,
                remarks: '',
                current_address: '',

                order_value: plan.fee,
                order_status: 'pending',
                discount_percent: 0,
                payable_amount: plan.fee,
                payment_by_customer: 0,
                payment_pending: plan.fee,
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
                days: plan.days,
                fixed_amount: true,
                amount: plan.fee,
            },
        }

        let postFetch = await fetch(`${apiV1}/patients/healthplan/subscribe?voucher_code=${plan?.voucher_code}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(details),
        })

        if (postFetch.ok) {
            refreshPage()
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.overlay} onClick={() => setOpenForm(false)}></div>
            <div className={classes.formWrapper}>
                <div className={classes.cross} onClick={() => setOpenForm(false)}>
                    x
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={classes.section}>
                        <FontAwesomeIcon className={classes.leaf} icon={faLeaf} />
                        Details Info
                    </div>
                    <div className={classes.innerWrap}>
                        <label>
                            Plan Name:
                            <span className={classes.fetchLabel}>
                                {plan.name} <p>.</p>
                            </span>
                        </label>
                        <div className={classes.formGrid}>
                            <div className={classes.formGrid}>
                                <label>
                                    Plan Price
                                    <span className={classes.fetchLabel}>
                                        ৳{plan.fee} <p>.</p>
                                    </span>
                                </label>
                                <label>
                                    Total Patient
                                    <span className={classes.fetchLabel}>
                                        {plan.total_patients} <p>.</p>
                                    </span>
                                </label>
                            </div>
                            <label>
                                Plan Duration
                                <span className={classes.fetchLabel}>
                                    {Math.floor(plan.days / 30) === 0 ? 1 : Math.floor(plan.days / 30)}{' '}
                                    {plan.days / 30 > 1 ? 'Months' : Math.floor(plan.days / 30) === 0 ? 'Day' : 'Month'}
                                    <p>.</p>
                                </span>
                            </label>
                        </div>
                        <label>
                            Select Payment Method <span className={classes.starSign}>*</span>
                            <select required className={classes.select} onChange={(e) => setPayment(e.target.value)}>
                                <option value="">Select</option>
                                <option value="cash on delivery">Cash On Delivery</option>
                                <option value="bkash">Bkash</option>
                            </select>
                        </label>
                    </div>
                    <button className={classes.button} type="submit">
                        Confirm Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}
