import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../../../allContext'
import Doctor from '../../../assets/img/doc/docstock.jpg'
import classes from './PersonalDoctor.module.css'

export default function PersonalDoctor() {
    const [doctor, setDoctor] = useState([])
    const [picture, setPicture] = useState({})

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiV1}/doctors/detail/3305`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            if (response.ok) {
                setDoctor(data)
            }
        }

        const fetchPicture = async () => {
            const response = await fetch(`${apiV1}/profile-pic/3305`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            if (response.ok) {
                setPicture(data.image_string)
            }
        }

        try {
            fetchData()
            fetchPicture()
        } catch {
            setDoctor([])
            fetchPicture({})
        }
    }, [token, apiV1])

    const profile = `${apiV1}/images/profile/${picture}`

    return (
        <div className={classes.container}>
            <p>Your Family Doctor</p>
            <Link to={`/doctor/4305`}>
                <div className={classes.flexWrapper}>
                    <div>
                        <img src={profile} alt="" />
                        <p>
                            5.0 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '8px' }} />
                        </p>
                    </div>

                    <div>
                        <p>{doctor?.user?.name}</p>
                        <span>{doctor?.doctor?.exp_year}+ years experience</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
