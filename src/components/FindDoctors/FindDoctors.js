import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import { Sidebar } from '../Nav'
import DoctorList from './DoctorList/DoctorList'
import classes from './FindDoctors.module.css'
import SearchDoctor from './SearchDoctor/SearchDoctor'

const FindDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [limit, setLimit] = useState(20)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    function limitIncrement() {
        setLimit((prev) => prev + 20)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/admin/doctors/active?skip=0&limit=${limit}`, {
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
    }, [token, apiV1, limit])

    const c = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.findDoctors}>
            <div className={classes.listContainer}>
                <SearchDoctor />
                <DoctorList doctors={doctors} />
                <button className={classes.loadButton} onClick={() => limitIncrement()}>
                    Load More
                </button>
            </div>
            <di className={classes.filter}>
                <div>Filter Doctor</div>
            </di>
        </div>
    )
}

export default FindDoctors
