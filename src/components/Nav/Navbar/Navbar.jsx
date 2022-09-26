import '@fortawesome/free-solid-svg-icons'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth, UserInfo } from '../../../allContext'
import Img from '../../../assets/img/doc/docstock.jpg'
import Logo from '../../../assets/img/logo/Logo192.png'
import Pic from '../../../assets/img/pic-placeholder.jpg'
import classes from './Navbar.module.css'

export default function Navbar() {
    const { dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    const logout = (e) => {
        e.preventDefault()
        dispatchUser({ type: 'remove' })
        dispatchAuth({ type: 'remove' })
    }

    const [doctors, setDoctors] = useState([])
    const [searchDoctor, setSearchDoctor] = useState('')
    const [doctorHide, setDoctorHide] = useState(false)
    const [pic, setPic] = useState({})

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token
    const auth = stateAuth.auth

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/doctors/search/?search=${searchDoctor}&skip=0&limit=10`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                setDoctors(data)
            } catch {
                setDoctors([])
            }
        }
        return fetchData()
    }, [token, apiV1, searchDoctor])

    const doctorSearchHandle = (searchDoctor) => {
        if (searchDoctor.length > 0) {
            setDoctorHide(true)
        }
        if (searchDoctor.length < 1) {
            setDoctorHide(false)
        }
        setSearchDoctor(searchDoctor)
    }

    useEffect(() => {
        let imgInfoFunc = async () => {
            let imgInfoFetch = await fetch(`${apiV1}/profile-pic`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await imgInfoFetch.json()

            if (imgInfoFetch.ok) {
                setPic(infoJson.image_string)
            }
        }
        try {
            imgInfoFunc()
        } catch (e) {}
    }, [apiV1, token])

    const picUrl = `${apiV1}/images/profile/${pic}`

    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Link to="/home">
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    My <span>Health</span>
                </p>
            </div>

            <div className={classes.searchhWrap}>
                <div className={classes.search}>
                    <input
                        type="text"
                        className={classes.searchTerm}
                        placeholder="Search doctor by specialty, location or name"
                        value={searchDoctor}
                        onChange={(e) => doctorSearchHandle(e.target.value)}
                    />
                    <button type="submit" className={classes.searchButton}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {doctorHide && (
                        <div className={classes.optAllDoc}>
                            {doctors &&
                                doctors.map((info, i) => (
                                    <div className={classes.optSelect} key={i}>
                                        <div>
                                            <Link to={`/doctor/${info?.id + 1000}`}>
                                                <div value={info?.id} className={classes.searchField}>
                                                    <div>
                                                        <img className={classes.searchImg} src={Img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h4>{info?.name}</h4>
                                                        <p style={{ marginTop: '-14px' }}>
                                                            {info?.specialities[0]?.speciality}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {auth === false ? (
                <div className={classes.icon}>
                    <p>
                        <FontAwesomeIcon icon={faBell} />
                        <div className={classes.notification}>
                            <p>Notication 1</p>
                            <p>Notication 2</p>
                        </div>
                    </p>
                </div>
            ) : (
                <div className={classes.icon}>
                    <p>
                        <FontAwesomeIcon icon={faBell} />
                        <div className={classes.notification}>
                            <p>Notication 1</p>
                            <p>Notication 2</p>
                        </div>
                    </p>
                    <span>
                        <img src={pic.toString().length < 16 ? Pic : picUrl} alt="" />
                        <div className={classes.user}>
                            <Link to="/profile">
                                <span>{userDetail?.name}</span>
                            </Link>
                            <Link to="/settings">
                                <p>Settings</p>
                            </Link>
                            <p onClick={(e) => logout(e)}>Logout</p>
                        </div>
                    </span>
                </div>
            )}
        </div>
    )
}
