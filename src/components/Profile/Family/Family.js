import { useState, useEffect, useContext } from 'react'
import { Auth } from '../../../allContext'
import classes from './Family.module.css'
import Members from './Members/Members'

const Family = () => {
    const { stateAuth } = useContext(Auth)
    const token = stateAuth.token
    const apiV1 = process.env.REACT_APP_API_V1

    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [familyMember, setFamilyMember] = useState([])
    const [hide, setHide] = useState(false)

    const handler = (search) => {
        let matches = []
        if (search.length > 1) {
            matches = familyMember[1].filter((familyMember) => familyMember.phone.toLowerCase().includes(search))
            setHide(true)
        }
        if (search.length < 11) {
            setHide(false)
        }
        setSearch(search)
        setSearchResult(matches)
    }

    const setHandle = (search) => {
        setSearch(search)
        setFamilyMember(search?.id)
        setSearchResult([])
        setHide(false)
    }

    // const sendReq = async () => {
    //     try{
    //         const sent = await fetch()
    //     }
    // }

    useEffect(() => {
        const fetchFamilyMember = async () => {
            try {
                const response = await fetch(`${apiV1}/admin/patient/all?phone_number=${search}&skip=0&limit=11`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const fm = await response.json()
                console.log(fm)
                setFamilyMember(fm)
            } catch {
                setFamilyMember([])
            }
        }
        return fetchFamilyMember()
    }, [token, apiV1, search])

    return (
        <div className={classes.Family}>
            <h3>Family members</h3>
            <div className={classes.Header}>
                <form>
                    <input
                        type="tel"
                        placeholder="Search by a phone number"
                        value={search.phone}
                        onChange={(e) => handler(e.target.value)}
                    />
                </form>

                {hide && (
                    <div className={classes.optAll}>
                        {searchResult &&
                            searchResult.map((info, i) => (
                                <div className={classes.optSelect} key={i}>
                                    <div onClick={() => setHandle(info)}>
                                        <option value={info.id}>
                                            {info.phone} - {info.name}-{info.id}
                                        </option>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
            <div div className={classes.Content}>
                <Members />
                <Members />
                <Members />
                <Members />
            </div>
        </div>
    )
}
export default Family
