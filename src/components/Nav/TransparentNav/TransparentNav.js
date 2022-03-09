import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import classes from './TransparentNav.module.css'

const TransparentNav = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const [logShow, setLogShow] = useState(false)

    const history = useHistory()
    const location = useLocation()

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    useEffect(() => {
        if (stateAuth.auth === true) {
            setLogShow(true)
        } else {
            setLogShow(false)
        }
    }, [stateAuth, history])

    return (
        <div className={classes.TransparentNav}>
            <div className="container">
                <h4>
                    {location.pathname !== '/profile' ? (
                        <Link to="/">
                            My <span>Health</span> Portal
                        </Link>
                    ) : null}
                </h4>
                <ul>
                    {logShow === true ? (
                        <>
                            {location.pathname !== '/profile' ? (
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                            ) : null}

                            <li>
                                <span onClick={(e) => logout(e)}>Logout</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TransparentNav
