import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../allContext'
import DoctorList from './DoctorList/DoctorList'
import classes from './FindDoctors.module.css'

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
                    },
                })
                const data = await response.json()
                setDoctors(data)
                console.log(data)
            } catch {
                setDoctors([])
            }
        }
        return fetchData()
    }, [token, apiV1, limit])

    return (
        <div className={classes.findDoctors}>
            <div className={classes.listContainer}>
                <DoctorList doctors={doctors} apiV1={apiV1} />
                <button className={classes.loadButton} onClick={() => limitIncrement()}>
                    Load More...
                </button>
            </div>
            <di className={classes.filter}>
                <p>Filter Doctor</p>
                <div className={classes.filterContainer}>
                    <div className={classes.price}>
                        <p>Filter by price</p>
                        <div>
                            <label class={classes.containerPrice}>
                                ৳50
                                <input type="range" min={50} max={2000} />
                                ৳2000
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Filter by specialty</p>
                        <div>
                            <select>
                                <option value=""></option>
                                <option value="">Family Medicine</option>
                                <option value="">Medicine</option>
                            </select>
                            <label class={classes.container}>
                                <input type="checkbox" />
                                <span class={classes.checkmark}></span>
                                Family Medicine
                            </label>
                            <label class={classes.container}>
                                <input type="checkbox" />
                                <span class={classes.checkmark}></span>
                                Medicine
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Filter by gender</p>
                        <div>
                            <label class={classes.container}>
                                <input type="checkbox" />
                                <span class={classes.checkmark}></span>
                                Female Doctors
                            </label>
                            <label class={classes.container}>
                                <input type="checkbox" />
                                <span class={classes.checkmark}></span>
                                Male Doctors
                            </label>
                        </div>
                    </div>

                    <div className={classes.box}>
                        <p>Sort by</p>
                        <div>
                            <label class={classes.containerSort}>
                                <input type="radio" id="gender" name="gender" value="male" />
                                <span>Popularity</span>
                            </label>
                            <label class={classes.containerSort}>
                                <input type="radio" id="gender" name="gender" value="male" />
                                <span>Rating</span>
                            </label>
                        </div>
                    </div>
                </div>
            </di>
        </div>
    )
}

export default FindDoctors
