import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Prescriptions.module.css'

const Prescriptions = () => {
    return (
        <div className={classes.wrapper}>
            <p>Prescriptions</p>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
                    <span>Medical_report.pdf</span>
                </p>

                <p>Detail Info</p>
                <p>29-June-2022</p>
                <button>Download</button>
            </div>
            <div className={classes.flexWrapper}>
                <p>
                    <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
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

export default Prescriptions
