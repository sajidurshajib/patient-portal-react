import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../../../allContext'
import classes from './SearchDoctor.module.css'

export default function SearchDoctor() {
    const [doctors, setDoctors] = useState([])

    const [searchDoctor, setSearchDoctor] = useState('')
    const [doctorHide, setDoctorHide] = useState(false)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/doctors/search/?search=${searchDoctor}&skip=0&limit=10`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                setDoctors(data)
            } catch {
                setDoctors([])
            }
        }
        return fetchData()
    }, [token, apiV1, searchDoctor])

    const doctorSearchHandle = (searchDoctor) => {
        if (searchDoctor.length > 0) {
            setDoctorHide(true)
        }
        if (searchDoctor.length < 1) {
            setDoctorHide(false)
        }
        setSearchDoctor(searchDoctor)
    }

    return (
        <div className={classes.searchDoctor}>
            <form className={classes.wrapperRight}>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkedAlt} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="search doctor by specialty, location or name"
                        value={searchDoctor}
                        onChange={(e) => doctorSearchHandle(e.target.value)}
                    />
                </div>
            </form>

            {doctorHide && (
                <div className={classes.optAllDoc}>
                    {doctors &&
                        doctors.map((info, i) => (
                            <div className={classes.optSelect} key={i}>
                                <div>
                                    <Link to={`/doctor/${info?.id}`}>
                                        <option value={info?.id}>
                                            {info?.name} | {info?.specialities[0]?.speciality}
                                        </option>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
