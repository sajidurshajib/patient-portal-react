import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../allContext'
import { toMonthNameShort } from '../../utils/date'
import { LineChart } from '../Chart'
import { DoubleNumber } from './index'

const Bp = () => {
    const [dataBp, setDataBp] = useState([])
    const [high, setHigh] = useState(null)
    const [low, setLow] = useState(null)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    let token = stateAuth.token

    const submit = async (e) => {
        e.preventDefault()

        if (high !== null || low !== null) {
            let bpFetch = await fetch(`${apiV1}/patient/indicators`, {
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                dataType: 'json',
                method: 'POST',
                body: JSON.stringify({
                    key: 'bp',
                    unit: 'mmHg',
                    slot_int1: high,
                    slot_int2: low,
                }),
            })

            if (bpFetch.ok) {
                setHigh(0)
                setLow(0)
            }
        }
    }

    useEffect(() => {
        let bpFunc = async () => {
            let bpFetch = await fetch(`${apiV1}/patient/indicators/bp`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let bpJson = await bpFetch.json()

            if (bpFetch.ok) {
                setDataBp(bpJson)
            }
        }

        try {
            bpFunc()
        } catch (e) {}
    }, [apiV1, token, high, low])

    let data = {
        labels: [
            ...dataBp
                .map(
                    (elm) =>
                        `${elm.created_at.slice(8, 10)}-${toMonthNameShort(
                            elm.created_at.slice(6, 7)
                        )}${elm.created_at.slice(2, 4)}`
                )
                .reverse(),
        ],
        datasets: [
            {
                label: 'High',
                data: [...dataBp.map((elm) => elm.slot_int1).reverse()],
                fill: true,
                backgroundColor: 'rgba(245, 66, 66,0.1)',
                borderColor: 'rgba(245, 66, 65,1)',
                lineTension: 0.4,
            },
            {
                label: 'Low',
                data: [...dataBp.map((elm) => elm.slot_int2).reverse()],
                fill: true,
                backgroundColor: 'rgba(45, 114, 178,0.2)',
                borderColor: 'rgba(45, 114, 178,1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <DoubleNumber
                title="Blood Presure"
                place1="Input High BP"
                place2="Input Low BP"
                st1={high}
                st2={low}
                setSt1={setHigh}
                setSt2={setLow}
                smbt={submit}
                min1={0}
                min2={0}>
                <br />
                <LineChart data={data} />
                <br />
            </DoubleNumber>
        </div>
    )
}

export default Bp
