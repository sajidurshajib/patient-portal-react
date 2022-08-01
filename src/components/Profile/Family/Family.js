import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    const [user, setUser] = useState([])
    const [hide, setHide] = useState(false)

    const [reqPopup, setReqPopup] = useState(false)
    const [relation_with, setRelationWith] = useState()
    const [relation_from, setRelationFrom] = useState()
    const [relation_to, setRelationTo] = useState()
    const [message, setMessage] = useState('hello')

    const popup = () => {
        setReqPopup(!reqPopup)
    }

    const handler = (search) => {
        let matches = []
        if (search.length > 10) {
            matches = user[1].filter((user) => user.phone.toLowerCase().includes(search))
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
        setUser(search?.id)
        setSearchResult([])
        setHide(false)
    }

    useEffect(() => {
        const fetchFamilyUser = async () => {
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
                setUser(fm)
            } catch {
                setUser([])
            }
        }
        return fetchFamilyUser()
    }, [token, apiV1, search])

    const familyReq = async (e) => {
        e.preventDefault()
        const reqFetch = await fetch(`${apiV1}/patient/family/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                relation_with,
                relation_from,
                relation_to,
                message,
            }),
        })
        if (reqFetch.ok) {
            setReqPopup(false)
        } else {
        }
    }

    return (
        <div className={classes.wrapper}>
            <p>Search Family Members</p>
            <div className={classes.family}>
                <div className={classes.Header}>
                    <form>
                        <input
                            type="tel"
                            placeholder="Search member by mobile number"
                            value={search.phone}
                            onChange={(e) => handler(e.target.value)}
                        />
                    </form>
                </div>
                <div className={classes.list}>
                    {/* {hide && (
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
                )} */}
                    {hide && (
                        <div className={classes.optAll}>
                            {searchResult &&
                                searchResult.map((info, i) => (
                                    <div className={classes.optSelect} key={i}>
                                        <div>
                                            {info.name} - {info.phone}
                                            <button
                                                onClick={() => {
                                                    setRelationWith(info.id)
                                                    popup()
                                                }}>
                                                <FontAwesomeIcon icon={faUserPlus} />
                                            </button>
                                        </div>

                                        {reqPopup && (
                                            <div className={classes.formPopup}>
                                                <div onClick={reqPopup}></div>
                                                <div className={classes.reqInfo}>
                                                    <h2>Send Request to {info.name}</h2>
                                                    <div className={classes.Content}>
                                                        <form onSubmit={familyReq}>
                                                            {/* <label htmlFor="relationWith">Relation With</label>
                                                        <input
                                                            id="relationWith"
                                                            type="number"
                                                            value={relation_with}
                                                            onChange={() => setRelationWith(info.id)}
                                                        /> */}

                                                            <label htmlFor="relation_from">Relation From</label>
                                                            <input
                                                                id="relation_from"
                                                                type="text"
                                                                value={relation_from}
                                                                onChange={(e) => setRelationFrom(e.target.value)}
                                                            />

                                                            <label htmlFor="relation_to">Relation To</label>
                                                            <input
                                                                id="relation_to"
                                                                type="text"
                                                                value={relation_to}
                                                                onChange={(e) => setRelationTo(e.target.value)}
                                                            />

                                                            <label htmlFor="relation_to">Message</label>
                                                            <input
                                                                id="message"
                                                                type="text"
                                                                value={message}
                                                                onChange={(e) => setMessage(e.target.value)}
                                                            />

                                                            <button>Send request</button>
                                                            <button onClick={popup}>Cancel</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
            <div className={classes.Content}>
                <Members />
            </div>
        </div>
    )
}
export default Family
