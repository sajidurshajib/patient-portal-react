import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../../allContext'
import districtJson from '../../../config/locations/bd-districts.json'
import divisionJson from '../../../config/locations/bd-divisions.json'
import postCodeJson from '../../../config/locations/bd-postcodes.json'
import upazilaJson from '../../../config/locations/bd-upazilas.json'
import { nameFromDivisionId, nameFromDistrictId, nameFromUpazilaId } from '../../../utils/location'
import classes from './UserDetail.module.css'

const UserDetail = () => {
    const [userDetail, setUserDetail] = useState()
    const [msg, setMsg] = useState('')

    console.log('u', userDetail)

    const apiV1 = process.env.REACT_APP_API_V1
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token

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

                if (response.ok) {
                    setUserDetail(data)
                }
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
            method: 'PATCH',
            body: JSON.stringify({
                ...userDetail,
                country: 'Bangladesh',
            }),
        })

        if (udSubmit.ok) {
            setMsg('User details updated')
        } else {
            setMsg('Something went wrong!')
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
                                onChange={(e) => setUserDetail({ ...userDetail, dob: e.target.value })}
                            />
                        </label>
                        <label>
                            Blood Group
                            <select
                                value={userDetail?.blood_group}
                                onChange={(e) => setUserDetail({ ...userDetail, blood_group: e.target.value })}>
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
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
                                value={userDetail?.nid}
                                onChange={(e) => setUserDetail({ ...userDetail, nid: e.target.value })}
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
                                value={userDetail?.division}
                                onChange={(e) => setUserDetail({ ...userDetail, division: e.target.value })}>
                                {divisionJson.divisions
                                    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                                    .map((v, i) => {
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
                                value={userDetail?.district}
                                onChange={(e) => setUserDetail({ ...userDetail, district: e.target.value })}>
                                {districtJson.districts
                                    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                                    .map((v, i) => {
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
                                value={userDetail?.sub_district}
                                onChange={(e) => setUserDetail({ ...userDetail, sub_district: e.target.value })}>
                                {upazilaJson.upazilas
                                    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                                    .map((v, i) => {
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
                                value={userDetail?.post_code}
                                onChange={(e) => setUserDetail({ ...userDetail, sub_district: e.target.value })}>
                                {postCodeJson.postcodes
                                    .sort((a, b) =>
                                        a.postOffice > b.postOffice ? 1 : b.postOffice > a.postOffice ? -1 : 0
                                    )
                                    .map((v, i) => {
                                        return (
                                            <option key={i} value={v.postOffice}>
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
