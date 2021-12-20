import { Link } from 'react-router-dom'
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <h2>
                Your Trusted Digital <br />
                <span>Healthcare</span> Partner
            </h2>
            <div className={classes.ButtonGroup}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Hero
