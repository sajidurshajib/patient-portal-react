import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import PlanList from './PlanList/PlanList'

export default function HealthPlan() {
    const [plans, setPlans] = useState([])

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/health-plan/`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setPlans(data)
            } catch {
                setPlans([])
            }
        }
        return fetchData()
    }, [token, apiV1])

    return (
        <div>
            <PlanList plans={plans} />
        </div>
    )
}
