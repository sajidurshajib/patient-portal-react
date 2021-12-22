import { faTimesCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Register.module.css'

const Register = ({ registerModal }) => {
    return (
        <div className={classes.Register}>
            <div className={classes.Wrapper}>
                <span onClick={() => registerModal(false)}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </span>

                <h2>
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                </h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button>Register</button>
                </form>
                <p className={classes.LoginNow}>
                    Have an account? <span>Login now</span>
                </p>
            </div>
        </div>
    )
}

export default Register
