import { Link } from 'react-router-dom'
import classes from './TransparentNav.module.css'

const TransparentNav = () => {
    return (
        <div className={classes.TransparentNav}>
            <div className="container">
                <h4>
                    <Link to="/">
                        My <span>Health</span> Portal
                    </Link>
                </h4>
                <ul>
                    <li>
                        <Link to="/profile">HEALTHx</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TransparentNav
