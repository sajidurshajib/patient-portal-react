import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Auth } from '../../allContext'
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

    const { id } = useParams()

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/doctors/detail/${id}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setDoctor(data)
            } catch {
                setDoctor([])
            }
        }
        return fetchData()
    }, [token, apiV1, id])

    return (
        <div className={classes.wrapper}>
            <Header doctor={doctor} />
            <div className={classes.infoWrapper}>
                <div className={classes.info}>
                    <div>
                        <p>BMDC Number</p>
                        <span>A-92227</span>
                    </div>
                    <div>
                        <p>Total Experience</p>
                        <span>2+ Years</span>
                    </div>
                    <div>
                        <p>Total Consultations</p>
                        <span>1</span>
                    </div>
                    <div>
                        <p>Ratings (1)</p>
                        <span>
                            5.0 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '14px' }} />
                        </span>
                    </div>
                    <div>
                        <p>Joined Date</p>
                        <span>
                            {/* {toMonthNameLong(doctor[0].created_at.slice(5, 7))} {doctor[0].created_at.slice(0, 4)} */}
                            April 2021
                        </span>
                    </div>
                </div>
            </div>

            <div className={classes.detailsWrapper}>
                <div>
                    <div className={classes.nav}>
                        <span
                            className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(1)}>
                            Info
                        </span>
                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            Appointment & Schedule
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
                            Special Achievement
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
                        {menu === 1 ? <Info /> : null}
                        {menu === 2 ? <Schedule /> : null}
                        {menu === 3 ? <ProfileDetail /> : null}
                        {menu === 4 ? <ProfessionalInfo /> : null}
                        {menu === 6 ? <Chambers /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
