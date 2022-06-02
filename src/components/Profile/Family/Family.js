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
    const [relationWith, setRelationWith] = useState()
    const [relationFrom, setRelationFrom] = useState()
    const [relationTo, setRelationTo] = useState()
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
                relationWith,
                relationFrom,
                relationTo,
                message,
            }),
        })
        console.log(relationWith, relationTo, relationFrom, message)
        if (reqFetch.ok) {
            console.log('submitted')
        } else {
            console.log('error')
        }
    }

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
                                        {info.name}-{info.id}
                                        {/* <button onClick={() => setHandle(info)}>
                                            <FontAwesomeIcon icon={faUserPlus} />
                                        </button> */}
                                        <button onClick={popup}>
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
                                                        <label htmlFor="relationWith">Relation With</label>
                                                        <input
                                                            id="relationWith"
                                                            type="number"
                                                            value={relationWith}
                                                            onChange={(e) => setRelationWith(e.target.value)}
                                                        />

                                                        <label htmlFor="relation_from">Relation From</label>
                                                        <input
                                                            id="relation_from"
                                                            type="text"
                                                            value={relationFrom}
                                                            onChange={(e) => setRelationFrom(e.target.value)}
                                                        />

                                                        <label htmlFor="relation_to">Relation To</label>
                                                        <input
                                                            id="relation_to"
                                                            type="text"
                                                            value={relationTo}
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
            <div className={classes.Content}>
                <Members />
            </div>
        </div>
    )
}
export default Family
