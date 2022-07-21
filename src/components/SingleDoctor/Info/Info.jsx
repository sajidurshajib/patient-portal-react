import React from 'react'
import classes from './Info.module.css'

export default function Info({ doctor }) {
    return (
        <div className={classes.infoWrapper}>
            <div className={classes.box}>
                <div>
                    <div className={classes.info}>
                        <div>
                            <p>Consultation Fee</p>
                            <p>
                                ৳{doctor?.doctor?.online_fees}
                                <span>(inc. VAT)</span>
                            </p>
                        </div>
                        <div>
                            <p>Total Consultation</p>
                            <p>10</p>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div>
                            <p>Follow-Up Fee</p>
                            <p>
                                ৳80<span>(inc. VAT)</span> <span>(within 10 days)</span>
                            </p>
                        </div>

                        <div>
                            <p>Consultation Time</p>
                            <p>11:30 am - 7:30 pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.box}>
                <p>
                    Availability: <span>Sat, Sun, Mon, Tue, Wed, Thu, Fri</span>
                </p>
            </div>
        </div>
    )
}
