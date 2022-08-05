import classes from './MedicalReports.module.css'
import Medication from './Medication/Medication'
import Prescriptions from './Prescriptions/Prescriptions'
import Surgery from './Surgery/Surgery'
import UploadedReports from './UploadedReports/UploadedReports'
import VaccinationHistory from './VaccinationHistory/VaccinationHistory'

const MedicalReports = () => {
    return (
        <div className={classes.MedicalReports}>
            <div className={classes.prescriptionsContainer}>
                <Prescriptions />
                <UploadedReports />
                <VaccinationHistory />
                <Medication />
                <Surgery />
            </div>
        </div>
    )
}

export default MedicalReports
