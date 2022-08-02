import PDF from '../../../assets/img/social/pdf.png'
import classes from './Prescriptions.module.css'

const Prescriptions = () => {
    return (
        <div className={classes.wrapper}>
            <p>Prescriptions</p>
            <div className={classes.container}>
                <div className={classes.btnContainer}>
                    <button>Upload</button>
                </div>
                <div className={classes.files}>
                    <div>
                        <div>
                            <img src={PDF} alt="file" />
                            <p>
                                <span>Medical_prescription.pdf</span>
                            </p>
                            <p>29-June-2022</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={PDF} alt="file" />
                            <p>
                                <span>Medical_prescription.pdf</span>
                            </p>
                            <p>29-June-2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prescriptions
