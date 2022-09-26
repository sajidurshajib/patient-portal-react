import { faRegistered, faHandSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { Auth } from '../../../../../allContext'
// import districtJson from '../../../../../config/locations/'
// import divisionJson from '../../../../config/locations/bd-divisions.json'
// import postcodeJson from '../../../../config/locations/bd-postcodes.json'
// import upazilaJson from '../../../../config/locations/bd-upazilas.json'
// import { nameFromDivisionId, nameFromDistrictId, nameFromUpazilaId } from '../../utils/location'
// import { statusCheck } from '../../utils/statusCheck'
import classes from './RegisterPopup.module.css'

export default function RegisterPopup({ setLoginOpen, setRegisterOpen, setShow }) {
    const OpenClose = () => {
        setLoginOpen(true)
        setRegisterOpen(false)
    }

    return (
        <div className={classes.Register}>
            <div className={classes.overlay} onClick={() => setShow(false)}></div>
            <div className={classes.Wrapper}>
                <div className={classes.left}>
                    <div>
                        <div className={classes.first}>
                            <h2>
                                <FontAwesomeIcon icon={faRegistered} />
                                Register
                            </h2>
                            <button onClick={() => setShow(false)}> X </button>
                        </div>

                        <form>
                            <div>
                                <input type="text" required />
                                <label>
                                    <span>Name</span>
                                </label>
                            </div>
                            <div className={classes.emailPhone}>
                                <div>
                                    <input type="email" required />
                                    <label>
                                        <span>Email</span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        pattern="[0-9]{11}"
                                        // onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                    <label>
                                        <span>Mobile [11 digit]</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <input type="password" required />
                                <label>
                                    <span>Password</span>
                                </label>
                            </div>
                            <div>
                                <input type="password" required />
                                <label>
                                    <span>Confirm password</span>
                                </label>
                            </div>
                            <div className={classes.Address}>
                                <h3>Address</h3>

                                <div>
                                    <select>
                                        <option disabled value={0}>
                                            Select Division
                                        </option>
                                        {/* {divisionJson.divisions.map((v) => {
                                            return (
                                                <option key={v.id} value={v.id} name={v.name}>
                                                    {v.name}
                                                </option>
                                            )
                                        })} */}
                                    </select>
                                    {/* <select value={district}> */}
                                    <select>
                                        <option value={0}>Select District</option>
                                        {/* {districtJson.districts
                                            .filter((item) => item.division_id === String(division))
                                            .map((v) => (
                                                <option key={v.id} value={v.id}>
                                                    {v.name}
                                                </option>
                                            ))} */}
                                    </select>
                                    {/* <select value={upazila} onChange={(e) => setUpazila(e.target.value)}> */}
                                    <select>
                                        <option disabled value={0}>
                                            Select Upazila
                                        </option>
                                        {/* {upazilaJson.upazilas
                                            .filter((item) => item.district_id === String(district))
                                            .map((v, i) => (
                                                <option key={i} value={v.id}>
                                                    {v.name}
                                                </option>
                                            ))} */}
                                    </select>

                                    {/* <select value={postcode}> */}
                                    <select>
                                        {/* <select value={postcode} onChange={(e) => setPostcode(e.target.value)}> */}
                                        <option disabled value={0}>
                                            Select Post Office
                                        </option>
                                        {/* {postcodeJson.postcodes
                                            .filter((item) => item.district_id === String(district))
                                            .map((v, i) => (
                                                <option key={i} value={v.postCode}>
                                                    {v.postOffice}
                                                </option>
                                            ))} */}
                                    </select>
                                </div>
                            </div>

                            <div className={classes.sexWrapper}>
                                <div>
                                    <label>Sex</label>
                                    {/* <select value={sex}> */}
                                    <select>
                                        {/* <select value={sex} onChange={(e) => setSex(e.target.value)}> */}
                                        <option value="male" defaultValue={true}>
                                            Male
                                        </option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <label>Date of birth</label>
                                    <input type="date" />
                                    {/* <input type="date" onChange={(e) => setDob(e.target.value)} /> */}
                                </div>
                            </div>

                            <button>Register</button>
                        </form>

                        <p className={classes.linkText}>
                            Already have an account?{' '}
                            <button className={classes.lastBtn} onClick={() => OpenClose()}>
                                Login <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
