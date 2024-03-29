import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Doc from '../../../assets/img/doc/doc-df.jpg'
import classes from './DoctorList.module.css'

const DoctorList = ({ doctors, apiV1 }) => {
    return (
        <div className={classes.DoctorList}>
            {doctors[1] &&
                doctors[1].map((doctor, i) => (
                    <div className={classes.doctor} key={i}>
                        <div>
                            <Link to={`/doctor/${doctor?.User?.id + 1000}`}>
                                <div
                                    className={classes.doctorPic}
                                    style={{
                                        backgroundImage:
                                            doctor?.Doctor?.images.length !== 0
                                                ? `url(${apiV1}/images/profile/${doctor?.Doctor?.images[0]?.image_string})`
                                                : `url(${Doc})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        border: '4px solid var(--light)',
                                    }}></div>
                            </Link>
                        </div>
                        <div className={classes.nameContainer}>
                            <p className={classes.name}>
                                <Link to={`/doctor/${doctor?.User?.id + 1000}`}>
                                    {`${doctor?.Doctor?.dr_title || ''} ${doctor?.User?.name || ''}`}
                                </Link>
                            </p>
                            <p className={classes.qualification}>{doctor?.DoctorQualification?.qualification}</p>
                            <p className={classes.speciality}>{doctor?.DoctorSpeciality?.speciality}</p>
                            <p className={classes.designation}>.</p>
                            {/* <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p> */}
                        </div>
                        <div>
                            <p>
                                {doctor?.Doctor?.exp_year !== null ? doctor?.Doctor?.exp_year : 0}+ Years of Experience
                            </p>
                            <span>
                                Ratings(1) 5.0
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '12px' }} />
                            </span>
                        </div>
                        <div>
                            <p>
                                BDT{' '}
                                {doctor?.Doctor?.online_fees !== null
                                    ? doctor?.Doctor?.online_fees > 499
                                        ? doctor?.Doctor?.online_fees + 100
                                        : doctor?.Doctor?.online_fees + doctor?.Doctor?.online_fees * (20 / 100)
                                    : ''}
                            </p>
                            <button>
                                <Link to={`/doctor/${doctor?.User?.id + 1000}`}> Book Appointment </Link>
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DoctorList
