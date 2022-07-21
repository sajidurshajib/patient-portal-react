import { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../allContext'
import ChamberState from './ChamberState/ChamberState'
import classes from './Chambers.module.css'

const Chambers = () => {
    const [chamberPopup, setChamberPopup] = useState(false)

    const [chamberInfo, setChamberInfo] = useState({})

    const { stateAuth } = useContext(Auth)

    const [msg, setMsg] = useState([])

    const [name, setName] = useState('')
    const [detail, setDetail] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    return (
        <div className={classes.ChamberPage}>
            <div className={classes.Chambers}>
                <div className={classes.head}>
                    <p>ID</p>
                    <p>Name</p>
                    <p>District</p>
                    <p>Chamber Address</p>
                    <p>Active</p>
                </div>
                {/* {data.map((chamber, i) => {
                    return (
                        <div className={classes.body} key={i}>
                            <p>{i + 1}</p>
                            <p>{chamber.name}</p>
                            <p>District</p>
                            <p>{chamber.detail}</p>
                            <p>
                                <ChamberState chamberId={chamber.id} />
                            </p>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}
export default Chambers
