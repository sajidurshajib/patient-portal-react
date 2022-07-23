import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { Auth } from '../../allContext'
import { toMonthNameShort } from '../../utils/date'
import { LineChart } from '../Chart'
import { Number } from './index'

const Weight = () => {
    const [weight, setWeight] = useState()
    const [dataWeight, setDataWeight] = useState([])

    const { stateAuth } = useContext(Auth)
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
                key: 'weight',
                unit: 'kg',
                slot_flt4: weight,
            }),
        })

        if (rbsFetch.ok) {
            setWeight(0)
        }
    }

    useEffect(() => {
        let weightFunc = async () => {
            let rbsFetch = await fetch(`${apiV1}/patient/indicators/weight`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let weightJson = await rbsFetch.json()

            if (rbsFetch.ok) {
                setDataWeight(weightJson)
            }
        }

        try {
            weightFunc()
        } catch (e) {}
    }, [apiV1, token, weight])

    let data = {
        labels: [
            ...dataWeight
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
                label: 'Weight',
                data: [...dataWeight.map((elm) => elm.slot_flt4).reverse()],
                fill: true,
                backgroundColor: 'rgba(65, 173, 217, 0.2)',
                borderColor: 'rgba(65, 173, 217, 1)',
                lineTension: 0.4,
            },
        ],
    }

    return (
        <div>
            <Number
                title="Weight"
                place="Input Weight"
                unit="kg"
                st={weight}
                setSt={setWeight}
                smbt={submit}
                min={0}
                max={400}>
                <br />
                <LineChart data={data} />
                <br />
            </Number>
        </div>
    )
}

export default Weight
