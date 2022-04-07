import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './VaccinationHistory.module.css'

const VaccinationHistory = () => {
    return (
        <div className={classes.VaccinationHistory}>
            <h2>Vaccination history</h2>
            <div className={classes.head}>
                <p>Vaccine</p>
                <p>Date</p>
            </div>
            <div className={classes.ListWrapper}>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faSyringe} /> New Record
                    </p>
                    <p>15-6-2020</p>
                </div>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faSyringe} /> Mid Record
                    </p>
                    <p>13-4-2020</p>
                </div>
                <div>
                    <p>
                        <FontAwesomeIcon icon={faSyringe} /> Old Record
                    </p>
                    <p>11-2-2020</p>
                </div>
            </div>
        </div>
    )
}

export default VaccinationHistory
