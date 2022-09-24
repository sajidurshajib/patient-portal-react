import { faArrowRight, faHandSparkles, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Auth } from '../../../../../allContext'
import { statusCheck } from '../../../../../utils/statusCheck'
// import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './LoginPopup.module.css'

export default function LoginPopup({ setLoginOpen, setRegisterOpen, setShow }) {
    const OpenClose = () => {
        setLoginOpen(false)
        setRegisterOpen(true)
    }

    return (
        <div>
            <div className={classes.Login}>
                <div className={classes.overlay} onClick={() => setShow(false)}></div>
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
                    <div className={classes.right}>
                        {/* <div className={classes.first}>
                            <button> X </button>
                        </div> */}
                        <div>
                            <div className={classes.first}>
                                <h2>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                    Login
                                </h2>
                                <button onClick={() => setShow(false)}> X </button>
                            </div>

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
                                <button className={classes.lastBtn} onClick={() => OpenClose()}>
                                    Register <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
