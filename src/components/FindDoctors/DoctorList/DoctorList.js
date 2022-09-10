import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import img3 from '../../../assets/img/doc/docstock.jpg'
import img1 from '../../../assets/img/doctor1.png'
import img2 from '../../../assets/img/doctor2.jpg'
import classes from './DoctorList.module.css'

const DoctorList = ({ doctors }) => {
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
                                        backgroundImage: `url(${img3})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        border: '4px solid var(--light)',
                                    }}></div>{' '}
                            </Link>
                        </div>
                        <div className={classes.nameContainer}>
                            <p className={classes.name}>
                                <Link to={`/doctor/${doctor?.User?.id + 1000}`}>Dr. {doctor?.User?.name}</Link>
                            </p>
                            <p className={classes.qualification}>{doctor?.DoctorQualification?.qualification}</p>
                            <p className={classes.speciality}>{doctor?.DoctorSpeciality?.speciality}</p>
                            <p className={classes.designation}>Assistant Professor</p>
                            <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p>
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
                            <p>BDT {doctor?.Doctor?.online_fees}</p>
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
