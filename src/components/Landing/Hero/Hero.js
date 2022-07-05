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
            }}>
            <div className={classes.left}>
                <h2>
                    Your Trusted Digital <br />
                    <span>Healthcare</span> Partner
                </h2>
                <div className={classes.ButtonGroup}>
                    <span>Button 1</span>
                    <span>Button 2</span>
                </div>
            </div>
            <div className={classes.right}>
                <img src={HeroImg} alt="Family" />
            </div>
        </div>
    )
}

export default Hero
