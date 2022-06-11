import { useState } from 'react'
import { useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../allContext'
import { LineChart } from '../Chart'
import { Number } from './index'

const Pulse = () => {
    const { stateAuth } = useContext(Auth)

    const [pulse, setPulse] = useState(0)
    const [dataPulse, setDataPulse] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1

    let token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()

        let pulseFetch = await fetch(`${apiV1}/patient/indicators`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                key: 'pulse',
                unit: 'rate/minute',
                slot_int1: pulse,
            }),
        })

        // let pulseJson = await pulseFetch.json()

        if (pulseFetch.ok) {
            setPulse(0)
        }
    }

    useEffect(() => {
        let pulseFunc = async () => {
            let pulseFetch = await fetch(`${apiV1}/patient/indicators/pulse`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let pulseJson = await pulseFetch.json()

            if (pulseFetch.ok) {
                await setDataPulse(pulseJson)
            }
        }

        try {
            pulseFunc()
        } catch (e) {}
    }, [apiV1, token, pulse])

    let data = {
        labels: [...dataPulse.map((elm) => elm.created_at.split('T')[0].slice(0, 7))],
        datasets: [
            {
                label: 'Pulse',
                data: [...dataPulse.map((elm) => elm.slot_int1).reverse()],
                fill: true,
                backgroundColor: 'rgba(245, 66, 66,0.2)',
                borderColor: 'rgba(245, 66, 66,1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <Number title="Pulse" unit="rate per minute" st={pulse} setSt={setPulse} smbt={submit} min={0} max={200}>
                <br />
                <LineChart data={data} />
                <br />
            </Number>
        </div>
    )
}

export default Pulse
