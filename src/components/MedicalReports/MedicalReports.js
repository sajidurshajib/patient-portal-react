import classes from './MedicalReports.module.css'
import Medication from './Medication/Medication'
import Prescription from './Prescription/Prescription'
import Report from './Report/Report'
import Surgery from './Surgery/Surgery'
import Vaccination from './Vaccination/Vaccination'

const MedicalReports = () => {
    return (
        <div className={classes.reports}>
            <div className={classes.container}>
                <Prescription />
                <Report />
                <Medication />
                <Surgery />
                <Vaccination />
            </div>
        </div>
    )
}

export default MedicalReports
