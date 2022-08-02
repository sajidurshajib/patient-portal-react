import { faRegistered, faHandSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Auth } from '../../allContext'
import districtJson from '../../config/locations/bd-districts.json'
import divisionJson from '../../config/locations/bd-divisions.json'
import postcodeJson from '../../config/locations/bd-postcodes.json'
import upazilaJson from '../../config/locations/bd-upazilas.json'
import { nameFromDivisionId, nameFromDistrictId, nameFromUpazilaId } from '../../utils/location'
import { statusCheck } from '../../utils/statusCheck'
import BG from '.././../assets/img/background-doc-table.jpg'
import classes from './Register.module.css'

const Register = () => {
    const [division, setDivision] = useState(0)
    const [district, setDistrict] = useState(0)
    const [upazila, setUpazila] = useState(0)
    const [postcode, setPostcode] = useState(0)

    const { stateAuth } = useContext(Auth)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPassword] = useState('')
    const [sex, setSex] = useState('male')
    const [dob, setDob] = useState('')

    const [alert, setAlert] = useState([])

    const history = useHistory()

    const apiV1 = process.env.REACT_APP_API_V1

    const submit = async (e) => {
        e.preventDefault()

        if (password !== cnfPassword) {
            setAlert([...alert, 'Password not confirmed'])
            return
        }

        let registrationFetch = await fetch(`${apiV1}/patients/signup`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                phone,
                sex,
                password,
                country: 'Bangladesh',
                division: nameFromDivisionId(String(division), divisionJson.divisions),
                district: nameFromDistrictId(String(district), districtJson.districts),
                sub_district: nameFromUpazilaId(String(upazila), upazilaJson.upazilas),
                post_code: postcode,
                dob,
            }),
        })

        // let registrationJson = await registrationFetch.json()

        if (registrationFetch.ok) {
            history.push('/login')
        } else {
            let patErr = statusCheck(registrationFetch, [
                { sts: 400, msg: 'User email/phone number or Password not correct.' },
                { sts: 404, msg: 'User email/phone number or Password not correct.' },
                { sts: 422, msg: 'Unprocessable Entity | Please check your email/phone number' },
            ])
            setAlert([...alert, patErr.msg])
        }
    }

    // if already logged in
    useEffect(() => {
        if (stateAuth.auth === true) {
            history.push('/profile')
        }
    }, [stateAuth, history])

    return (
        <div
            className={classes.Register}
            style={{ background: `url(${BG})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            {
                <>
                    {alert.length !== 0 ? (
                        <p className={classes.statusMsg}>
                            {alert[alert.length - 1]} <span onClick={() => setAlert([])}>x</span>
                        </p>
                    ) : null}
                </>
            }

            <div className={classes.Wrapper}>
                <div className={classes.left}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faRegistered} />
                            Register
                        </h2>
                        <form onSubmit={submit}>
                            <div>
                                <input type="text" onChange={(e) => setName(e.target.value)} required />
                                <label>
                                    <span>Name</span>
                                </label>
                            </div>
                            <div className={classes.emailPhone}>
                                <div>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} required />
                                    <label>
                                        <span>Email</span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        pattern="[0-9]{11}"
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <label>
                                        <span>Mobile [11 digit]</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>
                            <div>
                                <input type="password" onChange={(e) => setCnfPassword(e.target.value)} required />
                                <label>
                                    <span>Confirm password</span>
                                </label>
                            </div>
                            <div className={classes.Address}>
                                <h3>Address</h3>

                                <div>
                                    <select value={division} onChange={(e) => setDivision(e.target.value)}>
                                        <option disabled value={0}>
                                            Select Division
                                        </option>
                                        {divisionJson.divisions.map((v) => {
                                            return (
                                                <option key={v.id} value={v.id} name={v.name}>
                                                    {v.name}
                                                </option>
                                            )
                                        })}
                                    </select>

                                    <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                                        <option value={0}>Select District</option>
                                        {districtJson.districts
                                            .filter((item) => item.division_id === String(division))
                                            .map((v) => (
                                                <option key={v.id} value={v.id}>
                                                    {v.name}
                                                </option>
                                            ))}
                                    </select>

                                    <select value={upazila} onChange={(e) => setUpazila(e.target.value)}>
                                        <option disabled value={0}>
                                            Select Upazila
                                        </option>
                                        {upazilaJson.upazilas
                                            .filter((item) => item.district_id === String(district))
                                            .map((v, i) => (
                                                <option key={i} value={v.id}>
                                                    {v.name}
                                                </option>
                                            ))}
                                    </select>

                                    <select value={postcode} onChange={(e) => setPostcode(e.target.value)}>
                                        <option disabled value={0}>
                                            Select Post Office
                                        </option>
                                        {postcodeJson.postcodes
                                            .filter((item) => item.district_id === String(district))
                                            .map((v, i) => (
                                                <option key={i} value={v.postCode}>
                                                    {v.postOffice}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>

                            <div className={classes.sexWrapper}>
                                <div>
                                    <label>Sex</label>
                                    <select value={sex} onChange={(e) => setSex(e.target.value)}>
                                        <option value="male" defaultValue={true}>
                                            Male
                                        </option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <label>Date of birth</label>
                                    <input type="date" onChange={(e) => setDob(e.target.value)} />
                                </div>
                            </div>

                            <button>Register</button>
                        </form>

                        <p className={classes.linkText}>
                            Already have an account?{' '}
                            <Link to="/login">
                                Login <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={classes.right}>
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faHandSparkles} /> Welcome to HEALTHx
                        </h2>
                        <p>
                            With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx is aspired
                            to be the largest digital health platform in Bangladesh providing the digital platform based
                            Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record) services for the
                            Patients. With a mission to ‘Drive the digitalization of healthcare of Bangladesh, HEALTHx
                            is aspired to be the largest digital health platform in Bangladesh providing the digital
                            platform based Telehealth. Home healthcare & Cloud based EHR (Electronic Health Record)
                            services for the Patients. With a mission to ‘Drive the digitalization of healthcare of
                            Bangladesh, HEALTHx is aspired to be the largest digital health platform in Bangladesh
                            providing the digital platform based Telehealth. Home healthcare & Cloud based EHR
                            (Electronic Health Record) services for the Patients.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
