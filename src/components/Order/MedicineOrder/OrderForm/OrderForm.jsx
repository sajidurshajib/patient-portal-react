import React, { useState, useContext } from 'react'
import { UserInfo } from '../../../../allContext'
import { dateTime } from '../../../../utils/date'
import MedicineAdd from './MedicineAdd/MedicineAdd'
import classes from './OrderForm.module.css'

export default function OrderForm() {
    console.log(dateTime)
    const [serviceInfo, setServiceInfo] = useState('')
    const [patientAddress, setPatientAddress] = useState('')

    const [paymentMethod, setPaymentMethod] = useState('')
    const [lines, setLines] = useState([{}])

    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const api = process.env.REACT_APP_API_V1
    const auth = JSON.parse(localStorage.getItem('auth'))
    const token = auth.token

    let totalAmount = 0
    lines.forEach((item) => (totalAmount = totalAmount + item.total_mrp))

    const refreshPage = () => {
        window.location.reload()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = [
            {
                service_name: 'medicine_order',
                patient_id: userDetail?.id,
                order_placement: dateTime,
                order_completion: null,
                remarks: serviceInfo,
                current_address: patientAddress,

                order_value: totalAmount,
                order_status: 'pending',
                discount_percent: 0,
                payable_amount: totalAmount,
                payment_by_customer: 0,
                payment_pending: totalAmount,
                last_payment_date: null,
                payment_method: paymentMethod,
                payment_status: 'pending',

                service_provider_type: 'pharmacy',
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
            lines,
        ]

        let postFetch = await fetch(`${api}/patients/service/medicines`, {
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
        <div className={classes.innerWrap}>
            <div className={classes.container}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <ul>
                        <li>
                            <input type="checkbox" id="listItem1" />
                            <label htmlFor="listItem1" className={classes.labelMain}>
                                + Order Medicine <span>(click here)</span>
                            </label>
                            <ul>
                                <div className={classes.innerContainer}>
                                    <div className={classes.innerMargin}>
                                        <p>Add Medicine</p>
                                        <div className={classes.collab}>
                                            {lines.map((line, i) => (
                                                <MedicineAdd lines={lines} setLines={setLines} index={i} key={i} />
                                            ))}
                                            <span className={classes.total}>
                                                {isNaN(totalAmount) !== true ? `Total: ${totalAmount}TK` : ''}
                                            </span>
                                            <button
                                                className={classes.buttonAdd}
                                                onClick={() => setLines((prev) => prev.concat({}))}
                                                type="button">
                                                + Add Medicine
                                            </button>
                                        </div>
                                    </div>

                                    <div className={classes.collab}>
                                        <div className={classes.formGrid}>
                                            <label>
                                                Choose Payment Method <span style={{ color: 'red' }}>*</span>
                                                <select
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    required
                                                    className={classes.select}>
                                                    <option value="">Select</option>
                                                    <option value="cash on delivery">Cash On Delivery</option>
                                                    <option value="bkash">Bkash</option>
                                                </select>
                                            </label>
                                            <label>
                                                Remarks
                                                <input
                                                    type="text"
                                                    value={serviceInfo}
                                                    onChange={(e) => setServiceInfo(e.target.value)}
                                                />
                                            </label>
                                        </div>

                                        <label>
                                            Delivery Address
                                            <textarea
                                                type="text"
                                                rows={2}
                                                value={patientAddress}
                                                onChange={(e) => setPatientAddress(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <button className={classes.submitButton}>Order</button>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}
