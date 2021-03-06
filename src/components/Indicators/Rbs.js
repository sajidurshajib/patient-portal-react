import { useState } from 'react'
import { useContext, useEffect } from 'react/cjs/react.development'
import { Auth } from '../../allContext'
import { toMonthNameShort } from '../../utils/date'
import { LineChart } from '../Chart'
import { Number } from './index'

const Pulse = () => {
    const { stateAuth } = useContext(Auth)

    const [rbs, setRbs] = useState()
    const [dataRbs, setDataRbs] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1

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
                slot_flt4: rbs,
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
                setDataRbs(rbsJson)
            }
        }

        try {
            rbsFunc()
        } catch (e) {}
    }, [apiV1, token, rbs])

    let data = {
        labels: [
            ...dataRbs
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
                label: 'RBS',
                data: [...dataRbs.map((elm) => elm.slot_flt4).reverse()],
                fill: true,
                backgroundColor: 'rgba(119, 221, 119,0.2)',
                borderColor: 'rgba(119, 221, 119,1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <Number
                title="Diabetes"
                place="Input RBS"
                unit="mmol/L"
                st={rbs}
                setSt={setRbs}
                smbt={submit}
                min={0}
                max={40}>
                <br />
                <LineChart data={data} />
                <br />
            </Number>
        </div>
    )
}

export default Pulse
