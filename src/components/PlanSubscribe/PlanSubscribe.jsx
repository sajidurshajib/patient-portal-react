import React, { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import Login from '../Login/Login'
import Form from './Form/Form'
import classes from './PlanSubscribe.module.css'

export default function PlanSubscribe() {
    const [plans, setPlans] = useState([])
    const [singlePlan, setSinglePlan] = useState({})
    const [planId, setPlanId] = useState(0)

    const [popup, setPopup] = useState(false)

    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        let fectchData = async () => {
            let response = await fetch(`${apiV1}/health-plan/`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setPlans(data)
                console.log(data)
            }
        }
        try {
            fectchData()
        } catch {
            setPlans([])
        }
    }, [token, apiV1])

    useEffect(() => {
        let fectchData = async () => {
            let response = await fetch(`${apiV1}/health-plan/${planId}`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            let data = await response.json()

            if (response.ok) {
                setSinglePlan(data)
                // important line
                console.log('single', data)
            }
        }
        try {
            fectchData()
        } catch {
            setPlans([])
        }
    }, [token, apiV1, planId])

    return (
        <div className={classes.wrapper}>
            <Form plans={plans} singlePlan={singlePlan} setPlanId={setPlanId} />

            {/* <div>
                <button className={classes.btn1} onClick={() => setPopup(true)}>
                    Login
                </button>
                <button className={classes.btn2} onClick={() => setPopup(false)}>
                    Register
                </button>
            </div> */}

            {/* {popup && <div>Shariar Mahmud duke</div>} */}
        </div>
    )
}
