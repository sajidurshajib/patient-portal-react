import { Sidebar } from '../Nav'
import classes from './MedicalReports.module.css'
import Prescriptions from './Prescriptions/Prescriptions'
import UploadedReports from './UploadedReports/UploadedReports'
import VaccinationHistory from './VaccinationHistory/VaccinationHistory'

const MedicalReports = () => {
    return (
        <div className={classes.MedicalReports}>
            <div className={classes.prescriptionsContainer}>
                <Prescriptions />
                <UploadedReports />
                <VaccinationHistory />
            </div>
        </div>
    )
}

export default MedicalReports
