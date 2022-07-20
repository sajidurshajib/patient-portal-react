import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/img/error404.png'
import classes from './Error.module.css'

export default function Error() {
    return (
        <div className={classes.errorWrapper}>
            <img src={error} alt="" />
            <p>Page Not Found!</p>
            <div>
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    )
}
