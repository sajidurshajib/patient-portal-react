import React from 'react'
import Cover from '../../../assets/img/doc/bg.jpg'
import Doc from '../../../assets/img/doc/doc-df.jpg'
import classes from './Header.module.css'

export default function Header({ apiV1, doctor, picture }) {
    const profile = `${apiV1}/images/profile/${picture}`

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
                        <img className={classes.img} src={picture.toString().length < 16 ? Doc : profile} alt="" />
                    </div>
                    <h3>{`${doctor?.doctor?.dr_title || ''} ${doctor?.user?.name || ''}`}</h3>
                    {doctor?.qualifications?.map((qf, i) => (
                        <p key={i}>{qf.qualification}</p>
                    ))}
                    {doctor?.specialities?.map((sp, i) => (
                        <p key={i}>{sp.speciality}</p>
                    ))}
                </div>
            </div>
            <div className={classes.flex}>
                <div>
                    <p className={classes.consult}>Consultation Fee</p>
                    <p>
                        ৳
                        {doctor?.doctor?.online_fees !== null
                            ? doctor?.doctor?.online_fees > 499
                                ? doctor?.doctor?.online_fees + 100 || ''
                                : doctor?.doctor?.online_fees + doctor?.doctor?.online_fees * (20 / 100) || ''
                            : ''}
                        <span>(inc. VAT)</span>
                    </p>
                </div>
                <button>For Booking Please Call at 01322658481</button>
            </div>
        </div>
    )
}
