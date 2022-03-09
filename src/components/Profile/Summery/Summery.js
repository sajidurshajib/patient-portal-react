import { faHeartbeat, faRandom } from '@fortawesome/free-solid-svg-icons'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../../allContext'
import { Pulse, Rbs, Bp } from '../../Indicators'
import classes from './Summery.module.css'

const Summery = () => {
    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_V1 : env.REACT_APP_API_V1

    let token = stateAuth.token

    const [select, setSelect] = useState(1)
    const [lastBp, setLastBp] = useState(0)
    const [lastRbs, setLastRbs] = useState(0)
    const [lastPulse, setLastPulse] = useState(0)

    useEffect(() => {
        let bpFunc = async () => {
            let bpFetch = await fetch(`${apiV1}/patient/indicators/last/bp`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let bpJson = await bpFetch.json()

            if (bpFetch.ok) {
                await setLastBp(bpJson)
            }
        }

        try {
            bpFunc()
        } catch (e) {}

        let rbsFunc = async () => {
            let rbsFetch = await fetch(`${apiV1}/patient/indicators/last/rbs`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let rbsJson = await rbsFetch.json()

            if (rbsFetch.ok) {
                await setLastRbs(rbsJson)
            }
        }

        try {
            rbsFunc()
        } catch (e) {}

        let pulseFunc = async () => {
            let pulseFetch = await fetch(`${apiV1}/patient/indicators/last/pulse`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let pulseJson = await pulseFetch.json()

            if (pulseFetch.ok) {
                await setLastPulse(pulseJson)
            }
        }

        try {
            pulseFunc()
        } catch (e) {}
    }, [apiV1, token, setLastBp, setLastPulse, setLastRbs, select])

    // not auto update

    return (
        <div className={classes.Summery}>
            <div className={classes.Wrapper}>
                <div onClick={(e) => setSelect(1)}>
                    <FontAwesomeIcon icon={faHeartbeat} />
                    <p>
                        BP<span>(Blood Pressure)</span>
                    </p>
                    <p>
                        {lastBp.slot_int1}/{lastBp.slot_int2}
                    </p>
                    {select === 1 ? <span></span> : null}
                </div>
                <div onClick={(e) => setSelect(2)}>
                    <FontAwesomeIcon icon={faRandom} />
                    <p>
                        Diabetes <span>(Random blood sugar)</span>
                    </p>
                    <p>{lastRbs.slot_int1}</p>
                    {select === 2 ? <span></span> : null}
                </div>
                <div onClick={(e) => setSelect(3)}>
                    <FontAwesomeIcon icon={faWaveSquare} />
                    <p>
                        Pulse <span>(Rate per minute)</span>{' '}
                    </p>
                    <p>{lastPulse.slot_int1}</p>
                    {select === 3 ? <span></span> : null}
                </div>
            </div>
            <div className={classes.Graph}>
                <br />
                {select === 1 ? <Bp /> : ''}
                {select === 2 ? <Rbs /> : ''}
                {select === 3 ? <Pulse /> : ''}
                <br />
            </div>
        </div>
    )
}

export default Summery
