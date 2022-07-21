import { faBriefcaseMedical, faMapMarkedAlt, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../../../allContext'
import classes from './SearchDoctor.module.css'

export default function SearchDoctor() {
    const [doctors, setDoctors] = useState([])

    const [doctorName, setDoctorName] = useState('')
    const [doctorSpecialty, setDoctorSpecialty] = useState('')
    const [doctorLocation, setDoctorLocation] = useState('Dhaka')

    const [doctorNameHide, setDoctorNameHide] = useState(false)
    const [doctorSpecialtyHide, setSpecialtyDoctorHide] = useState(false)
    const [doctorLocationHide, setDoctorLocationHide] = useState(false)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${apiV1}/doctors/search/?district=${doctorLocation}&speciality=${doctorSpecialty}&name=${doctorName}&skip=0&limit=10`,
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                    }
                )
                const data = await response.json()
                setDoctors(data)
            } catch {
                setDoctors([])
            }
        }
        return fetchData()
    }, [token, apiV1, doctorName, doctorSpecialty, doctorLocation])

    const doctorLocationHandle = (doctorLocation) => {
        if (doctorLocation.length > 0) {
            setDoctorLocationHide(true)
        }
        if (doctorLocation.length < 1) {
            setDoctorLocationHide(false)
        }
        setDoctorLocation(doctorLocation)
    }

    const doctorSpecialtyHandle = (doctorSpecialty) => {
        if (doctorSpecialty.length > 0) {
            setSpecialtyDoctorHide(true)
        }
        if (doctorSpecialty.length < 1) {
            setSpecialtyDoctorHide(false)
        }
        setDoctorSpecialty(doctorSpecialty)
    }

    const doctorNameHandle = (doctorName) => {
        if (doctorName.length > 0) {
            setDoctorNameHide(true)
        }
        if (doctorName.length < 1) {
            setDoctorNameHide(false)
        }
        setDoctorName(doctorName)
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
                        placeholder="search location"
                        value={doctorLocation}
                        onChange={(e) => doctorLocationHandle(e.target.value)}
                    />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faBriefcaseMedical} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="search specialty"
                        value={doctorSpecialty}
                        onChange={(e) => doctorSpecialtyHandle(e.target.value)}
                    />
                </div>
                <div className={classes.searchBar}>
                    <span>
                        <FontAwesomeIcon icon={faSortAlphaDown} height={10} width={15} />
                    </span>
                    <input
                        type="text"
                        placeholder="search name"
                        value={doctorName}
                        onChange={(e) => doctorNameHandle(e.target.value)}
                    />
                </div>
            </form>

            {(doctorNameHide || doctorSpecialtyHide || doctorLocationHide) && (
                <div className={classes.optAllDoc}>
                    {doctors &&
                        doctors.map((info, i) => (
                            <div className={classes.optSelect} key={i}>
                                <div>
                                    <Link to={`/doctor/${info?.User?.id}`}>
                                        <option value={info?.User?.id}>
                                            {info?.User?.name} | {info?.DoctorSpeciality?.speciality} |{' '}
                                            {info?.DoctorChamber?.district}
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
