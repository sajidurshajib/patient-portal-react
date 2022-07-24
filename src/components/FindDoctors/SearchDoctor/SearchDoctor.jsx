import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../../../allContext'
import Img from '../../../assets/img/doc/docstock.jpg'
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
                                    <Link to={`/doctor/${info?.id + 1000}`}>
                                        <div value={info?.id} className={classes.searchField}>
                                            <div>
                                                <img className={classes.searchImg} src={Img} alt="" />
                                            </div>
                                            <div>
                                                <h3>{info?.name}</h3>
                                                <p style={{ marginTop: '-14px' }}>
                                                    {info?.specialities[0]?.speciality}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
