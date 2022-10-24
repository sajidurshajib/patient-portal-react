import { faStar, faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Auth } from '../../allContext'
import { toMonthNameLong } from '../../utils/date'
import { MobileNav, Navbar } from '../Nav'
import Chambers from './Chambers/Chambers'
import Header from './Header/Header'
import Info from './Info/Info'
import ProfessionalInfo from './ProfessionalInfo/ProfessionalInfo'
import ProfileDetail from './ProfileDetail/ProfileDetail'
import Schedule from './Schedule/Schedule'
import classes from './SingleDoctor.module.css'

export default function SingleDoctor() {
    const [menu, setMenu] = useState(1)
    const [doctor, setDoctor] = useState([])
    const [picture, setPicture] = useState({})

    const { id } = useParams()
    const setId = id - 1000

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${apiV1}/doctors/detail/${setId}`, {
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
            const response = await fetch(`${apiV1}/profile-pic/${setId}`, {
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
            setPicture({})
        }
    }, [token, apiV1, setId])

    return (
        <div className={classes.wrapper}>
            <Navbar />
            <MobileNav />
            <div className={classes.container}>
                <Header apiV1={apiV1} doctor={doctor} picture={picture} />
                <div className={classes.infoWrapper}>
                    <div className={classes.info}>
                        <div>
                            <p>BMDC Number</p>
                            <span>A-{doctor?.doctor?.bmdc}</span>
                        </div>
                        <div>
                            <p>Total Experience</p>
                            <span>{doctor?.doctor?.exp_year !== null ? doctor?.doctor?.exp_year : 0}+ Years</span>
                        </div>
                        <div>
                            <p>Total Consultations</p>
                            <span>10</span>
                        </div>
                        <div>
                            <p>Ratings (1)</p>
                            <span>
                                5.0 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '12px' }} />
                            </span>
                        </div>
                        <div>
                            <p>Joined Date</p>
                            <span>
                                {toMonthNameLong(doctor?.user?.created_at.slice(5, 7))}{' '}
                                {doctor?.user?.created_at.slice(0, 4)}
                            </span>
                            <FontAwesomeIcon icon={faStethoscope} className={classes.mobileIcon} />
                        </div>
                    </div>
                </div>

                <div className={classes.detailsWrapper}>
                    <div>
                        <div className={classes.nav}>
                            <span
                                className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(1)}>
                                Appointment & Schedule
                            </span>
                            <span
                                className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(2)}>
                                Info
                            </span>

                            <span
                                className={menu === 8 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(8)}>
                                About
                            </span>

                            <span
                                className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(3)}>
                                Qualification
                            </span>

                            <span
                                className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(4)}>
                                Professional Info
                            </span>

                            <span
                                className={menu === 5 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(5)}>
                                Gallery
                            </span>

                            <span
                                className={menu === 6 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(6)}>
                                Chambers
                            </span>
                            <span
                                className={menu === 7 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                                onClick={(e) => setMenu(7)}>
                                Reviews
                            </span>
                        </div>
                        <div>
                            {menu === 1 ? <Schedule doctor={doctor} /> : null}
                            {menu === 2 ? <Info doctor={doctor} /> : null}
                            {/* {menu === 3 ? <ProfileDetail doctor={doctor} /> : null} */}
                            {/* {menu === 4 ? <ProfessionalInfo doctor={doctor} /> : null} */}
                            {menu === 6 ? <Chambers doctor={doctor} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
