import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../../allContext'
import districtJson from '../../../config/locations/bd-districts.json'
import divisionJson from '../../../config/locations/bd-divisions.json'
import postCodeJson from '../../../config/locations/bd-postcodes.json'
import upazilaJson from '../../../config/locations/bd-upazilas.json'
import classes from './UserDetail.module.css'

const UserDetail = () => {
    const { stateAuth } = useContext(Auth)

    const [userDetail, setUserDetail] = useState({})
    const [division, setDivision] = useState('')
    const [district, setDistrict] = useState('')
    const [post_code, setPostCode] = useState('')
    const [sub_district, setSubDistrict] = useState('')
    const [nid, setNid] = useState('')
    const [dob, setDob] = useState('')
    const [blood_group, setBloodGroup] = useState('')

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
    //             console.log('new', ud)
    //             setUserDetail(ud)
    //         }
    //     }
    //     userDetailFunc()
    // }, [token, apiV1])

    // Right Fetch

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
                // ...userDetail,
                division,
                district,
                post_code,
                sub_district,
                nid,
                dob,
                blood_group,
            }),
        })

        if (udSubmit.ok) {
            setMsg('User details updated')
        } else {
            setMsg('Something went wrong')
            console.log('user: ', userDetail)
        }
    }

    return (
        <div className={classes.userDetail}>
            <form onSubmit={submit}>
                <div className={classes.formWrap}>
                    <div className={classes.sectionHeader}>User Detail Update</div>
                    <div className={classes.formGrid1}>
                        <label>
                            Date Of Birth
                            <input
                                type="date"
                                value={userDetail?.dob}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, dob: e.target.value })
                                    setDivision(e.target.value)
                                }}
                            />
                        </label>
                        <label>
                            Blood Group
                            <select
                                value={userDetail?.blood_group !== null ? userDetail?.blood_group : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, blood_group: e.target.value })
                                    setBloodGroup(e.target.value)
                                }}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B+">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </label>
                        <label>
                            NID
                            <input
                                type="text"
                                value={userDetail?.nid !== null ? userDetail?.nid : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, nid: e.target.value })
                                    setNid(e.target.value)
                                }}
                            />
                        </label>
                    </div>
                </div>

                <div className={classes.formWrap}>
                    <div className={classes.sectionHeader}>Address Update</div>
                    <div className={classes.formGrid}>
                        <label>
                            Division
                            <select
                                className={classes.select}
                                value={userDetail?.division !== null ? userDetail?.division : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, division: e.target.value })
                                    setDivision(e.target.value)
                                }}>
                                {divisionJson.divisions.map((v, i) => {
                                    return (
                                        <option key={i} value={v.name}>
                                            {v.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            District
                            <select
                                className={classes.select}
                                value={userDetail?.district !== null ? userDetail?.district : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, district: e.target.value })
                                    setDistrict(e.target.value)
                                }}>
                                {districtJson.districts.map((v, i) => {
                                    return (
                                        <option key={i} value={v.name}>
                                            {v.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </label>

                        <label>
                            Upazila
                            <select
                                className={classes.select}
                                value={userDetail?.sub_district !== null ? userDetail?.sub_district : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, sub_district: e.target.value })
                                    setSubDistrict(e.target.value)
                                }}>
                                {upazilaJson.upazilas.map((v, i) => {
                                    return (
                                        <option key={i} value={v.name}>
                                            {v.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            Post Office
                            <select
                                className={classes.select}
                                value={userDetail?.post_code !== null ? userDetail?.post_code : ''}
                                onChange={(e) => {
                                    setUserDetail({ ...userDetail, post_code: e.target.value })
                                    setPostCode(e.target.value)
                                }}>
                                {postCodeJson.postcodes.map((v, i) => {
                                    return (
                                        <option key={i} value={v.postCode}>
                                            {v.postOffice}
                                        </option>
                                    )
                                })}
                            </select>
                        </label>
                    </div>
                </div>
                <button className={classes.Button}>Update</button>
                <div className={classes.alertMessage}>{msg && <span>{msg}</span>}</div>
            </form>
        </div>
    )
}

export default UserDetail
