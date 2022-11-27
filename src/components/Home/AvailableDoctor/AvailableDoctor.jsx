import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Doc from '../../../assets/img/doc/doc-df.jpg'
import classes from './AvailableDoctor.module.css'

export default function AvailableDoctor() {
    const [doctors, setDoctors] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/admin/doctors/active?skip=0&limit=4`, {
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
    }, [apiV1])

    console.log('d', doctors)

    return (
        <div>
            <div className={classes.wrapper}>
                <p>Available Doctors</p>
                <div className={classes.container}>
                    {doctors[1] &&
                        doctors[1].map((doctor) => (
                            <div className={classes.containerFlex}>
                                <div>
                                    <Link to={`/doctor/${doctor?.User?.id + 1000}`}>
                                        <img
                                            src={
                                                doctor?.Doctor?.images.length !== 0
                                                    ? `${apiV1}/images/profile/${doctor?.Doctor?.images[0]?.image_string}`
                                                    : Doc
                                            }
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                {/* <div className={classes.ratting}>
                                    <p>
                                        5.0 <FontAwesomeIcon icon={faStar} />
                                    </p>
                                </div> */}
                                <div className={classes.info}>
                                    <Link to={`/doctor/${doctor?.User?.id + 1000}`}>
                                        <span>{`${doctor?.Doctor?.dr_title || ''} ${doctor?.User?.name || ''}`}</span>{' '}
                                    </Link>
                                    <div>
                                        <p>{doctor?.DoctorQualification?.qualification}</p>
                                        <p>{doctor?.DoctorSpeciality?.speciality}</p>
                                    </div>
                                    <p>
                                        <span>
                                            ৳
                                            {doctor?.Doctor?.online_fees !== null
                                                ? doctor?.Doctor?.online_fees > 499
                                                    ? doctor?.Doctor?.online_fees + 100
                                                    : doctor?.Doctor?.online_fees +
                                                      doctor?.Doctor?.online_fees * (20 / 100)
                                                : ''}
                                        </span>
                                        /consultation
                                    </p>
                                </div>
                            </div>
                        ))}
                    {/* <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc2} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.9 <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Hasan Mahmud</span>
                            <div>
                                <p>MBBS, FCPS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳150 </span>/consultation
                            </p>
                        </div>
                    </div>

                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc3} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.8 <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Shariar Hossain</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳300 </span>/consultation
                            </p>
                        </div>
                    </div>
                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc4} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                5.0 <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Iftekhar Ahmed</span>
                            <div>
                                <p>MBBS, FCPS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳200 </span>/consultation
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
