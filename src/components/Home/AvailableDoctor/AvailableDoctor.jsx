import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Doc2 from '../../../assets/img/doc/d2.png'
import Doc3 from '../../../assets/img/doc/d3.png'
import Doc4 from '../../../assets/img/doc/d4.png'
import Doc from '../../../assets/img/doc/doctor.jpg'
import classes from './AvailableDoctor.module.css'

export default function AvailableDoctor() {
    return (
        <div>
            <div className={classes.wrapper}>
                <p>Available Doctors</p>
                <div className={classes.container}>
                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.9 <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Rashadul Hasan</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳100 </span>/consultation
                            </p>
                        </div>
                    </div>
                    <div className={classes.containerFlex}>
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
                                4.9 <FontAwesomeIcon icon={faStar} />
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
                                4.9 <FontAwesomeIcon icon={faStar} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
