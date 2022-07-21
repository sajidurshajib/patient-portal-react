import { faSyringe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './VaccinationHistory.module.css'

const VaccinationHistory = () => {
    return (
        <div className={classes.wrapper}>
            <p>Vaccine History</p>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faSyringe} className={classes.icon} />
                    <span>Vaccine_report.pdf</span>
                </p>

                <p>Detail Info</p>
                <p>29-June-2022</p>
                <button>Download</button>
            </div>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faSyringe} className={classes.icon} />
                    <span>Vaccine_report.pdf</span>
                </p>

                <p>Detail Info</p>
                <p>28-June-2022</p>
                <button>Download</button>
            </div>
            <div className={classes.btn}>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default VaccinationHistory
