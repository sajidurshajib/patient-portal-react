import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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
                                4.9 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '10px' }} />{' '}
                                (100)
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Rashadul Hasan</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳100 </span>/per consultation
                            </p>
                        </div>
                    </div>
                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.9 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '10px' }} />{' '}
                                (100)
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Rashadul Hasan</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳100 </span>/per consultation
                            </p>
                        </div>
                    </div>

                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.9 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '10px' }} />{' '}
                                (100)
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Rashadul Hasan</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳100 </span>/per consultation
                            </p>
                        </div>
                    </div>
                    <div className={classes.containerFlex}>
                        <div>
                            <img src={Doc} alt="" />
                        </div>
                        <div className={classes.ratting}>
                            <p>
                                4.9 <FontAwesomeIcon icon={faStar} style={{ color: 'orange', fontSize: '10px' }} />{' '}
                                (100)
                            </p>
                        </div>
                        <div className={classes.info}>
                            <span>Dr. Rashadul Hasan</span>
                            <div>
                                <p>MBBS</p>
                                <p>General Physician</p>
                            </div>
                            <p>
                                <span> ৳100 </span>/per consultation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
