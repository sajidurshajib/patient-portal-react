import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './UploadedReports.module.css'

const UploadedReports = () => {
    return (
        <div className={classes.UploadedReports}>
            <h2>Uploaded Reports</h2>
            <div className={classes.files}>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} />
                    <p>Report name</p>
                </div>
            </div>
        </div>
    )
}

export default UploadedReports
