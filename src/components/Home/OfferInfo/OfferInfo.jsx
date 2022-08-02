import React from 'react'
import Offer from '../../../assets/img/offer/offer3.png'
import classes from './OfferInfo.module.css'

export default function OfferInfo() {
    return (
        <div className={classes.offerWrapper}>
            <div className={classes.gridBox}>
                <div>
                    <p>
                        ফ্যামিলি ডাক্তার প্যাকেজ সারামাস জুড়ে মাত্র <span>৳১৪৯</span>
                    </p>
                    <p>
                        ফ্যামিলি ডাক্তার প্যাকেজ নিয়ে ডাক্তারের সাথে কথা বলুন যতবার দরকার <span>{'>'}</span>
                    </p>
                </div>
                <div>
                    <img src={Offer} alt="" />
                </div>
            </div>
        </div>
    )
}
