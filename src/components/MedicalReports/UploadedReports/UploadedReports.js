import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReportUpload from '../ReportUpload/ReportUpload'
import classes from './UploadedReports.module.css'

const UploadedReports = () => {
    return (
        <div className={classes.UploadedReports}>
            <div className={classes.Header}>
                <h2>Uploaded Reports</h2>
                <ReportUpload />
            </div>
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
