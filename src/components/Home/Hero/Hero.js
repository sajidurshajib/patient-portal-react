import BG from '../../../assets/img/background.jpg'
import HeroImg from '../../../assets/img/family_healthx.png'
import classes from './Hero.module.css'

const Hero = ({ loginModal, registerModal }) => {
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
                    <span onClick={() => loginModal(true)}>Login</span>
                    <span onClick={() => registerModal(true)}>Register</span>
                </div>
            </div>
            <div className={classes.right}>
                <img src={HeroImg} alt="Family" />
            </div>
        </div>
    )
}

export default Hero
