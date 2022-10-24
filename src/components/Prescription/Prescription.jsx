import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import PrescriptionList from './PrescriptionList/PrescriptionList'

export default function Prescription() {
    const [prescriptions, setPrescriptions] = useState([])

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiV1}/ep/patient/ep/?skip=0&limit=10`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })

            const data = await response.json()
            if (response.ok) {
                setPrescriptions(data)
                console.log(data)
            }
        }
        try {
            fetchData()
        } catch {
            setPrescriptions([])
        }
    }, [token, apiV1])

    return (
        <div>
            <PrescriptionList prescriptions={prescriptions} />
        </div>
    )
}
