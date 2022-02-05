import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BG from '.././../assets/img/background.jpg'
import classes from './Login.module.css'

const Login = () => {
    return (
        <div
            className={classes.Login}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className={classes.Wrapper}>
                <h2>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    Login
                </h2>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
