import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Prescriptions.module.css'

const Prescriptions = () => {
    return (
        <div className={classes.Prescriptions}>
            <h2>Prescriptions</h2>
            <div className={classes.head}>
                <p>Prescriptions</p>
                <p>Date</p>
            </div>
            <div className={classes.ListWrapper}>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>New Record</p>
                    <p>15-6-2020</p>
                </div>
            </div>
        </div>
    )
}

export default Prescriptions
