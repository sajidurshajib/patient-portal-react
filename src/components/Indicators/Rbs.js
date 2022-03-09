import { useState } from 'react'
import env from 'react-dotenv'
import { useContext, useEffect } from 'react/cjs/react.development'
import { Auth } from '../../allContext'
import { LineChart } from '../Chart'
import { Number } from './index'

const Pulse = () => {
    const { stateAuth } = useContext(Auth)

    const [rbs, setRbs] = useState(0)
    const [dataRbs, setDataRbs] = useState([])

    const apiV1 = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_V1 : env.REACT_APP_API_V1

    let token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()

        let rbsFetch = await fetch(`${apiV1}/patient/indicators`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                key: 'rbs',
                unit: 'mmol/L',
                slot_int1: rbs,
            }),
        })

        if (rbsFetch.ok) {
            setRbs(0)
        }
    }

    useEffect(() => {
        let rbsFunc = async () => {
            let rbsFetch = await fetch(`${apiV1}/patient/indicators/rbs`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let rbsJson = await rbsFetch.json()

            if (rbsFetch.ok) {
                await setDataRbs(rbsJson)
            }
        }

        try {
            rbsFunc()
        } catch (e) {}
    }, [apiV1, token, rbs])

    let data = {
        labels: [...dataRbs.map((elm) => elm.created_at.split('T')[0].slice(0, 7))],
        datasets: [
            {
                label: 'RBS',
                data: [...dataRbs.map((elm) => elm.slot_int1)],
                fill: true,
                backgroundColor: 'rgba(119, 221, 119,0.2)',
                borderColor: 'rgba(119, 221, 119,1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <Number title="Diabetes" unit="mmol/L" st={rbs} setSt={setRbs} smbt={submit} min={0} max={40}>
                <br />
                <LineChart data={data} />
                <br />
            </Number>
        </div>
    )
}

export default Pulse
