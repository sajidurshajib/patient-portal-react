import { useContext, useEffect, useState } from 'react'
import env from 'react-dotenv'
import { Auth } from '../../../allContext'
import districtJson from '../../../config/locations/bd-districts.json'
import divisionJson from '../../../config/locations/bd-divisions.json'
import postCodeJson from '../../../config/locations/bd-postcodes.json'
import upazilaJson from '../../../config/locations/bd-upazilas.json'
import classes from './UserDetail.module.css'

const UserDetail = () => {
    const { stateAuth } = useContext(Auth)

    const [userDetail, setUserDetail] = useState(null)
    const [msg, setMsg] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1

    const token = stateAuth.token

    //wrong fetch

    // useEffect(() => {
    //     let userDetailFunc = async () => {
    //         let userDetailFetch = await fetch(`${apiV1}/user/details`, {
    //             headers: {
    //                 Accept: 'appllication/json',
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             dataType: 'json',
    //             method: 'GET',
    //         })

    //         if (userDetailFetch.ok) {
    //             let ud = await userDetailFetch.json()
    //             await setUserDetail(ud)
    //         }
    //     }

    //     userDetailFunc()
    // }, [token, apiV1])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/user/details/`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setUserDetail(data)
            } catch {
                setUserDetail({})
            }
        }
        return fetchData()
    }, [token, apiV1])

    const submit = async (e) => {
        e.preventDefault()
        let udSubmit = await fetch(`${apiV1}/user/details`, {
            headers: {
                Accept: 'appllication/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            dataType: 'json',
            method: 'PUT',
            body: JSON.stringify({
                ...userDetail,
            }),
        })
        console.log(userDetail)
        if (udSubmit.ok) {
            setMsg('User details updated')
        } else {
            setMsg('Something went wrong')
        }
    }

    return (
        <div className={classes.UserDetail}>
            <h2>User Detail Update</h2>
            {msg.length !== 0 ? (
                <p className={classes.msg}>
                    {msg}
                    <span onClick={(e) => setMsg('')}>x</span>
                </p>
            ) : null}

            <form onSubmit={submit}>
                <div className={classes.dob}>
                    <label>Date of birth:</label>
                    <input
                        type="date"
                        value={userDetail?.dob}
                        onChange={(e) => setUserDetail({ ...userDetail, dob: e.target.value })}
                    />
                </div>

                <div className={classes.bg}>
                    <label>Blood group</label>
                    <select
                        value={userDetail?.blood_group !== null ? userDetail?.blood_group : ''}
                        onChange={(e) => setUserDetail({ ...userDetail, blood_group: e.target.value })}>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B+">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className={classes.nid}>
                    <label>NID</label>
                    <input
                        type="text"
                        value={userDetail?.nid !== null ? userDetail?.nid : ''}
                        onChange={(e) => setUserDetail({ ...userDetail, nid: e.target.value })}
                    />
                </div>

                <h3>Address</h3>
                <label htmlFor="division">Division</label>
                <select className={classes.select}>
                    {divisionJson.divisions.map((v, i) => {
                        return (
                            <option key={i} value={v.name} selected={userDetail?.division === v.name}>
                                {v.name}
                            </option>
                        )
                    })}
                </select>

                <label htmlFor="district">District</label>
                <select className={classes.select}>
                    {districtJson.districts.map((v, i) => {
                        return (
                            <option key={i} value={v.name} selected={userDetail?.district === v.name}>
                                {v.name}
                            </option>
                        )
                    })}
                </select>

                <label htmlFor="upazila">Upazila</label>
                <select className={classes.select}>
                    {upazilaJson.upazilas.map((v, i) => {
                        return (
                            <option key={i} value={v.name} selected={userDetail?.sub_district === v.name}>
                                {v.name}
                            </option>
                        )
                    })}
                </select>

                <label htmlFor="pcode">Post Office</label>
                <select className={classes.select}>
                    {postCodeJson.postcodes.map((v, i) => {
                        return (
                            <option key={i} value={v.postCode} selected={userDetail?.post_code === v.postCode}>
                                {v.postOffice}
                            </option>
                        )
                    })}
                </select>

                <button>Update</button>
            </form>
        </div>
    )
}

export default UserDetail
