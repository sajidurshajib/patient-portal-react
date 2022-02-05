import { faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BG from '.././../assets/img/background.jpg'
import classes from './Register.module.css'

const Register = () => {
    return (
        <div
            className={classes.Register}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className={classes.Wrapper}>
                <h2>
                    <FontAwesomeIcon icon={faRegistered} />
                    Register
                </h2>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone number [11 digit]" pattern="[0-9]{11}" />
                    <input type="password" placeholder="Password" />

                    <input type="text" placeholder="Address" />

                    <div className={classes.sexWrapper}>
                        <div>
                            <select name="sex" id="sex">
                                <option value="" disabled selected>
                                    Sex
                                </option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dob">Date of birth</label>
                            <input type="date" id="dob" />
                        </div>
                    </div>

                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Register
