import { Link } from 'react-router-dom'
import classes from './TransparentNav.module.css'

const TransparentNav = () => {
    return (
        <div className={classes.TransparentNav}>
            <h4>
                My <span>Health</span> Portal
            </h4>
            <ul>
                <li>
                    <Link to="https://www.healthx.com.bd">HEALTHx</Link>
                </li>
            </ul>
        </div>
    )
}

export default TransparentNav
