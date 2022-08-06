import BG from '../../../assets/img/background.jpg'
import HeroImg from '../../../assets/img/family_healthx.png'
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <div
            className={classes.Hero}
            style={{
                background: `url(${BG})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '430px',
            }}>
            <div className={classes.left}>
                <h2>
                    My
                    <span> Health</span> Portal
                </h2>
                <div className={classes.text}>
                    <span>
                        My Health Portal is one stop digital health care solution for Personal health record &
                        healthcare service management.
                    </span>
                </div>
            </div>
            <div className={classes.right}>
                <img src={HeroImg} alt="Family" />
            </div>
        </div>
    )
}

export default Hero
