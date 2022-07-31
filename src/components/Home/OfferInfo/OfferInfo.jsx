import React from 'react'
import Offer from '../../../assets/img/offer/offer.png'
import classes from './OfferInfo.module.css'

export default function OfferInfo() {
    return (
        <div className={classes.offerWrapper}>
            <img src={Offer} alt="" />
        </div>
    )
}
