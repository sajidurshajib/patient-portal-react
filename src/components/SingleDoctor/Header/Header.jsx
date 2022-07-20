import React from 'react'
import Cover from '../../../assets/img/doc/bg.jpg'
import Img from '../../../assets/img/doc/docstock.jpg'
import classes from './Header.module.css'

export default function Header({ doctor }) {
    const doctorInfo = doctor[0]
    const doctorSpecialty = doctor[1]
    const doctorQualification = doctor[2]

    return (
        <div
            className={classes.header}
            style={{
                background: `url(${Cover})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
            <div>
                <div className={classes.headLeftWrapper}>
                    <div className={classes.profilePic}>
                        <img className={classes.img} src={Img} alt="" />
                    </div>
                    <h2>Dr. {doctorInfo?.name}</h2>
                    <p>MBBS</p>
                    <p>General Physician</p>
                </div>
            </div>
            <div className={classes.flex}>
                <div>
                    <p>Consultation Fee</p>
                    <p>
                        ৳100<span>(inc. VAT)</span>
                    </p>
                </div>
                <button>For Booking Please Call at 01322658481</button>
            </div>
        </div>
    )
}
