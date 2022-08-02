import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../../allContext'
import Pic from '../../../../assets/img/pic-placeholder.jpg'
import AcceptReject from '../AcceptReject/AcceptReject'
import classes from './Members.module.css'

const Members = () => {
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    const [familyMember, setFamilyMember] = useState({})

    useEffect(() => {
        const familyFetch = async () => {
            try {
                const response = await fetch(`${apiV1}/patient/family/`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const fm = await response.json()

                if (response.ok) {
                    setFamilyMember(fm)
                }
            } catch {
                setFamilyMember({})
            }
        }
        familyFetch()
    }, [token, apiV1])

    let data = Array.from(familyMember)

    return (
        <div className={classes.wrapper}>
            <p>Family Member List</p>
            <div className={classes.member}>
                {data.map((member, i) => (
                    <div className={classes.grid}>
                        <div>
                            <div>
                                <AcceptReject />
                            </div>
                        </div>
                        <img src={Pic} alt="" />
                        <p>{member.relation_with_name}</p>
                        <p>{member.relation_to}</p>
                        <p className={classes.status}>
                            <span className={classes.waiting}>{member.relationship_status}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Members
