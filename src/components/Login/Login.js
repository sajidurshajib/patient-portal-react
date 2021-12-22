import { faSignInAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Login.module.css'

const Login = ({ loginModal }) => {
    return (
        <div className={classes.Login}>
            <div className={classes.Wrapper}>
                <span onClick={() => loginModal(false)}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </span>

                <h2>
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                </h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <p className={classes.RegisterNow}>
                    New user? <span>Register now</span>
                </p>
            </div>
        </div>
    )
}

export default Login
