import { Sidebar } from '../Nav'
import Prescriptions from '../Profile/Prescriptions/Prescriptions'
import classes from './MedicalReports.module.css'
import UploadedReports from './UploadedReports/UploadedReports'
import VaccinationHistory from './VaccinationHistory/VaccinationHistory'

const MedicalReports = () => {
    return (
        <div className={classes.MedicalReports}>
            <div>
                <Sidebar />
            </div>
            <div>
                <Prescriptions />
                <UploadedReports />
                <VaccinationHistory />
            </div>
        </div>
    )
}

export default MedicalReports
