import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../../../../allContext'
import { statusCheck } from '../../../../../utils/statusCheck'
// import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './LoginPopup.module.css'

export default function LoginPopup() {
    return (
        <div>
            <div className={classes.Login}>
                {/* {
                    <>
                        {alert.length !== 0 ? (
                            <p className={classes.statusMsg}>
                                {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                            </p>
                        ) : null}
                    </>
                } */}

                <div className={classes.Wrapper}>
                    <div className={classes.left}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faHandSparkles} /> Welcome to HEALTHx
                            </h2>
                            <p>
                                With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx is
                                aspired to be the largest digital health platform in Bangladesh providing the digital
                                platform based Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record)
                                services for the Patients.
                            </p>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div>
                            <h2>
                                <FontAwesomeIcon icon={faSignInAlt} />
                                Login
                            </h2>
                            <form>
                                <div>
                                    <input type="text" required />
                                    <label>
                                        <span>Email or Phone number</span>
                                    </label>
                                </div>

                                <div>
                                    <input type="password" required />
                                    <label>
                                        <span>Password</span>
                                    </label>
                                </div>

                                <button>Login</button>
                            </form>

                            <p className={classes.linkText}>
                                Don't have an account?{' '}
                                <Link to="/register">
                                    Register <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
