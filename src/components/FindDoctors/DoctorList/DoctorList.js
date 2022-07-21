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
                            <Link to={`/doctor/${doctor?.User?.id}`}>
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
                                <Link to={`/doctor/${doctor?.User?.id}`}>Dr. {doctor?.User?.name}</Link>
                            </p>
                            <p className={classes.qualification}>{doctor?.DoctorQualification?.qualification}</p>
                            <p className={classes.speciality}>{doctor?.DoctorSpeciality?.speciality}</p>
                            <p className={classes.designation}>Assistant Professor</p>
                            <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p>
                        </div>
                        <div>
                            <p>2+ Years of Experience</p>
                            <span>
                                Ratings(1) 5.0
                                <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '14px' }} />
                            </span>
                        </div>
                        <div>
                            <p>BDT 200.00</p>
                            <button>Book Appointment</button>
                        </div>
                    </div>
                ))}

            {/* <div className={classes.doctor}>
                <div>
                    <div
                        className={classes.doctorPic}
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            border: '4px solid var(--light)',
                        }}></div>
                </div>
                <div className={classes.nameContainer}>
                    <p className={classes.name}>Dr. Farhana Afroze</p>
                    <p className={classes.qualification}>MBBS, PGT, MRTSP</p>
                    <p className={classes.speciality}>Gynaecology & Obstetrics</p>
                    <p className={classes.designation}>Professor</p>
                    <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p>
                </div>
                <div>
                    <p>BDT 600.00</p>
                    <button>Book Appointment</button>
                </div>
            </div> */}
            {/* <div className={classes.doctor}>
                <div>
                    <div
                        className={classes.doctorPic}
                        style={{
                            backgroundImage: `url(${img1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            border: '4px solid var(--light)',
                        }}></div>
                </div>
                <div className={classes.nameContainer}>
                    <p className={classes.name}>Dr. Md. Majharul Huq Tanim</p>
                    <p className={classes.qualification}>MBBS, DEM (BIRDEM), MACP (USA)</p>
                    <p className={classes.speciality}>Diabetes & Endocrinology</p>
                    <p className={classes.designation}>Professor</p>
                    <p className={classes.currentWorkPlace}>Islami Bank Central Hospital, kakrail Kakrail, Dhaka</p>
                </div>
                <div>
                    <p>5+ Years of Experience</p>
                    <span>
                        Ratings(100) 5.0
                        <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '14px' }} />
                    </span>
                </div>
                <div>
                    <p>BDT 600.00</p>
                    <button>Book Appointment</button>
                </div>
            </div> */}
        </div>
    )
}

export default DoctorList
