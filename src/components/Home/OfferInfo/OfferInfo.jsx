import React from 'react'
import Offer from '../../../assets/img/offer/heart.png'
import classes from './OfferInfo.module.css'

export default function OfferInfo() {
    return (
        <div className={classes.offerWrapper}>
            <div className={classes.gridBox}>
                <div>
                    <p>
                        Today <span>20%</span> discount on lung examination
                    </p>
                    <p>
                        The package price includes: consultation of a pulmonogist, spirography, cardiogram{' '}
                        <span>{'>'}</span>{' '}
                    </p>
                </div>
                <div>
                    <img src={Offer} alt="" />
                </div>
            </div>
        </div>
    )
}
