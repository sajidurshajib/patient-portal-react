import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import bg from '../../assets/img/background-doc.jpg'
import { Sidebar } from '../Nav'
import DoctorList from './DoctorList/DoctorList'
import classes from './FindDoctors.module.css'
import SearchDoctor from './SearchDoctor/SearchDoctor'

const FindDoctors = () => {
    const [doctors, setDoctors] = useState([])

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/admin/doctors/active?skip=0&limit=10`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setDoctors(data)
            } catch {
                setDoctors([])
            }
        }
        return fetchData()
    }, [token, apiV1])

    const c = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.FindDoctors}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.listContainer}>
                {/* <div
                    className={classes.searchBar}
                    style={{
                        background: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'none',
                    }}>
                    <div>
                        <form>
                            <input type="text" placeholder="Medicine specialist" />
                            <FontAwesomeIcon icon={faSearch} onClick={(e) => c(e)} />
                        </form>
                    </div>
                </div> */}
                <SearchDoctor />
                <DoctorList doctors={doctors} />
            </div>
        </div>
    )
}

export default FindDoctors
