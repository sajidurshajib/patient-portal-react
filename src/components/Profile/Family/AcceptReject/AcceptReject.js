import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import classes from './AcceptReject.module.css'

const AcceptReject = () => {
    const [active, setActive] = useState(false)
    const popup = () => {
        setActive(!active)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.Dropdown}>
                <button className={classes.DropdownButton} onClick={popup}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            {active && (
                <div className={classes.formPopup}>
                    <div className={classes.overlay} onClick={() => setActive(false)}></div>
                    <div className={classes.reqInfo}>
                        <p>Accept or Reject Member</p>
                        <div className={classes.Content}>
                            <button className={classes.Button1}>Accept</button>
                            <button className={classes.Button2}>Reject</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AcceptReject
