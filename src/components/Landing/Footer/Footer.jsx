import React from 'react'
import Love from '../../../assets/img/LOVE.png'
import footerImg from '../../../assets/img/footer.png'
import fb from '../../../assets/img/social/fb.png'
import link from '../../../assets/img/social/link.png'
import yt from '../../../assets/img/social/yt.png'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <img src={Love} className={classes.loveImg} alt="" />
            <img src={footerImg} className={classes.footerImg1} alt="" />
            {/* <img src={footerImg} className={classes.footerImg2} alt="" /> */}
            <div>
                <p>My Health Portal</p>
                <div>
                    <img src={fb} alt="" />
                    <img src={link} alt="" />
                    <img src={yt} alt="" />
                </div>
                <span>© HEALTHX Ventures. All rights reserved.</span>
            </div>
        </div>
    )
}
