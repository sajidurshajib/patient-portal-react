import { useContext, useState, useEffect } from 'react'
import { Auth } from '../../../../allContext'
import classes from './ChamberState.module.css'

const ChamberState = ({ chamberId }) => {
    const { stateAuth } = useContext(Auth)

    const [msg, setMsg] = useState([])
    const [active, setActive] = useState({})

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const activateChamberFunc = async (e) => {
        e.preventDefault()
        let activateChamberFetch = await fetch(`${apiV1}/doctors/chamber/activate/${chamberId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'PUT',
        })
        if (activateChamberFetch.ok) {
            setMsg(...msg, 'Chamber Activated')
        }
    }

    useEffect(() => {
        let activeChamberFunc = async (e) => {
            let activeChamberFetch = await fetch(`${apiV1}/doctors/chamber/active`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let activeChamberJson = await activeChamberFetch.json()
            if (activeChamberFetch.ok) {
                setActive(activeChamberJson)
            }
        }
        try {
            activeChamberFunc()
        } catch (e) {}
    }, [apiV1, token, msg])

    return (
        <label className={classes.switch}>
            <button onClick={activateChamberFunc}></button>
            <span className={chamberId === active.id ? `${classes.spanActive}` : `${classes.spanDeactive}`}></span>
        </label>
    )
}
export default ChamberState
