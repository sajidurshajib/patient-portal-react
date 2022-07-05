import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../../allContext'
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
        <div className={classes.Member}>
            {data.map((member, i) => {
                return (
                    <div>
                        <>
                            <AcceptReject />
                        </>
                        <div>
                            <h3>{member.relation_with_name}</h3>
                            <p>{member.relation_to}</p>

                            <span>{member.relationship_status}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Members
