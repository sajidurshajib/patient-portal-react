import React, { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import classes from './MedicineOrder.module.css'
import OrderForm from './OrderForm/OrderForm'
import OrderList from './OrderList/OrderList'

export default function MedicineOrder() {
    const [services, setServices] = useState([])
    const [medicines, setMedicines] = useState([])
    const [serviceId, setServiceId] = useState(0)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/patients/services?skip=0&limit=15`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setServices(data)
            } catch {
                setServices([])
            }
        }
        return fetchData()
    }, [token, apiV1])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/service/medicine/${serviceId}?skip=0&limit=100`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setMedicines(data)
            } catch {
                setMedicines([])
            }
        }
        return fetchData()
    }, [token, apiV1, serviceId])

    return (
        <div className={classes.medicine}>
            <div>
                Medicine Order
                <div>
                    <div>
                        <OrderForm />
                    </div>
                    <div>
                        <OrderList services={services} medicines={medicines} setServiceId={setServiceId} />
                    </div>
                </div>
            </div>
            <div>Medicine Price</div>
        </div>
    )
}
