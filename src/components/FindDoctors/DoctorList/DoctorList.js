import img1 from '../../../assets/img/doctor1.png'
import img2 from '../../../assets/img/doctor2.jpg'
import img3 from '../../../assets/img/doctor3.jpg'
import classes from './DoctorList.module.css'

const DoctorList = () => {
    return (
        <div className={classes.DoctorList}>
            <div className={classes.doctor}>
                <div>
                    <div
                        className={classes.doctorPic}
                        style={{
                            backgroundImage: `url(${img1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            border: '4px solid var(--grey2)',
                        }}></div>
                </div>
                <div className={classes.nameContainer}>
                    <p className={classes.name}>Dr. Ashis Sharma</p>
                    <p className={classes.qualification}>MBBS, BCS</p>
                    <p className={classes.speciality}>Neck Sugery</p>
                    <p className={classes.designation}>Assistant Professor</p>
                    <p className={classes.currentWorkPlace}>Dhaka Medical College & Hospital Shahbag, Dhaka</p>
                </div>
                <div>
                    <p>BDT 600.00</p>
                    <button>Book Appointment</button>
                </div>
            </div>
            <div className={classes.doctor}>
                <div>
                    <div
                        className={classes.doctorPic}
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            border: '4px solid var(--grey2)',
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
            </div>
            <div className={classes.doctor}>
                <div>
                    <div
                        className={classes.doctorPic}
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            border: '4px solid var(--grey2)',
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
                    <p>BDT 600.00</p>
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorList
