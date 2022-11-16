import React, { useContext, useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../../allContext'
import Logo from '../../../assets/logo/logo.png'
import Pic from '../../../assets/password/pass.png'
import classes from './ForgotPassword.module.css'

export default function ForgotPassword() {
    const [hide, setHide] = useState(false)
    const [msg, setMsg] = useState('')
    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: '',
    })

    const { dispatchAuth } = useContext(Auth)
    const history = useHistory()

    const apiV1 = process.env.REACT_APP_API_V1

    const handleSubmit = async (e) => {
        e.preventDefault()

        let fetchOtp = await fetch(`${apiV1}/forget-password/request/${phone}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        let otp = await fetchOtp.json()

        if (fetchOtp.ok) {
            setHide(true)
        } else {
            setMsg(otp.context)
            setTimeout(() => {
                setMsg('')
            }, 3000)
        }
    }

    const handleOnchange = (e) => {
        setOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleOTP = async (e) => {
        e.preventDefault()

        let fetchOtp = await fetch(
            `${apiV1}/forget-password/token/${phone}/${`${otp.otp1}${otp.otp2}${otp.otp3}${otp.otp4}${otp.otp5}${otp.otp6}`}`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        )

        let log = await fetchOtp.json()

        if (fetchOtp.ok) {
            dispatchAuth({ type: 'token', payload: log.access_token })

            setMsg('OTP Matched')
            history.push('/reset-password')
        } else {
            dispatchAuth({ type: 'remove' })
            setMsg(log.context)
        }
    }

    return (
        <div className={classes.wraper}>
            <Link to="/login">
                <img src={Logo} alt="" />
            </Link>
            <div className={classes.box}>
                <div>
                    <img src={Pic} alt="" />
                </div>
                <div>
                    <h2>
                        Forgot <br />
                        Password?
                    </h2>
                    <p>
                        Enter the mobile number associated with your account!<span>*</span>
                    </p>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label>+88</label>
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            minLength={11}
                            maxLength={11}
                            pattern="[0][1][0-9]{9}"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <button type="submit">Next</button>
                    </form>
                    {/* <button onClick={() => setHide(!hide)}>Submit</button> */}

                    <div className={classes.show}>
                        {hide && (
                            <>
                                <span>OTP has been sent to your number!</span>
                                <p className={classes.time}>
                                    {hide && (
                                        <span>
                                            <Countdown date={Date.now() + 5 * 60 * 1000} />
                                        </span>
                                    )}
                                </p>
                                <p>OTP</p>
                                <form onSubmit={(e) => handleOTP(e)}>
                                    <div>
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp1"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp2"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp3"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp4"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp5"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                        <input
                                            type="tel"
                                            id=""
                                            name="otp6"
                                            onChange={handleOnchange}
                                            maxLength={1}
                                            minLength={1}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Confirm OTP</button>
                                </form>
                            </>
                        )}
                        <span>{msg}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
