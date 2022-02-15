import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import classes from './TransparentNav.module.css'

const TransparentNav = () => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const [logShow, setLogShow] = useState(false)

    const history = useHistory()

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
                    <Link to="/">
                        My <span>Health</span> Portal
                    </Link>
                </h4>
                <ul>
                    <li>
                        <Link to="/profile">HEALTHx</Link>
                    </li>
                    {logShow === true ? (
                        <li>
                            <span onClick={(e) => logout(e)}>Logout</span>
                        </li>
                    ) : (
                        ''
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TransparentNav
