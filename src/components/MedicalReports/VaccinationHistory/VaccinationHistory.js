import PDF from '../../../assets/img/social/pdf.png'
import classes from './VaccinationHistory.module.css'

const VaccinationHistory = () => {
    return (
        <div className={classes.wrapper}>
            <p>Vaccination History</p>
            <div className={classes.container}>
                <div className={classes.btnContainer}>
                    <button>Upload</button>
                </div>
                <div className={classes.files}>
                    <div>
                        <div>
                            <img src={PDF} alt="file" />
                            <p>
                                <span>Covid_second_dose.pdf</span>
                            </p>
                            <p>30-July-2022</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={PDF} alt="file" />
                            <p>
                                <span>Covid_first_dose.pdf</span>
                            </p>
                            <p>29-June-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VaccinationHistory
