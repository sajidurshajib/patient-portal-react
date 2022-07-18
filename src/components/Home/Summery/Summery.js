import { faHeartbeat, faRandom } from '@fortawesome/free-solid-svg-icons'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext, useEffect } from 'react'
import { Auth } from '../../../allContext'
import { Pulse, Rbs, Bp } from '../../Indicators'
import classes from './Summery.module.css'

const Summery = () => {
    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
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
                setLastBp(bpJson)
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
                setLastRbs(rbsJson)
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
                setLastPulse(pulseJson)
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
                <div onClick={() => setSelect(1)} className={select === 1 ? classes.activeBox : classes.box}>
                    <FontAwesomeIcon icon={faHeartbeat} />
                    <p>
                        BP<span>(Blood Pressure)</span>
                    </p>
                    <p>
                        {lastBp.slot_int1}/{lastBp.slot_int2}
                        <FontAwesomeIcon icon={faHeartbeat} className={classes.bgIcon} />
                    </p>
                </div>
                <div onClick={() => setSelect(2)} className={select === 2 ? classes.activeBox : classes.box}>
                    <FontAwesomeIcon icon={faRandom} />
                    <p>
                        Diabetes <span>(Random blood sugar)</span>
                    </p>
                    <p>
                        {lastRbs.slot_flt4}
                        <FontAwesomeIcon icon={faRandom} className={classes.bgIcon} />
                    </p>
                </div>
                <div onClick={() => setSelect(3)} className={select === 3 ? classes.activeBox : classes.box}>
                    <FontAwesomeIcon icon={faWaveSquare} />
                    <p>
                        Pulse <span>(Rate per minute)</span>{' '}
                    </p>
                    <p>
                        {lastPulse.slot_int1}
                        <FontAwesomeIcon icon={faWaveSquare} className={classes.bgIcon} />
                    </p>
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
