import classes from './ProfessionalInfo.module.css'

const ProfessionalInfo = () => {
    return (
        <>
            <div className={classes.professionalInfo}>
                <div className={classes.Category}>
                    <div>
                        <h2>Work Experience</h2>
                        <ul>
                            <li>
                                <div>
                                    <h3>Dhaka Medical College</h3>
                                    <p>Lecturer</p>
                                    <p>2015-2019</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className={classes.Category}>
                    <div>
                        <h2>Academic History</h2>
                        <ul>
                            <li>
                                <div>
                                    <h3>Dhaka Medical College</h3>
                                    <p>MBBS</p>
                                    <p>Class of 2010</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <h3>Healtnx Medical College</h3>
                                    <p>FCPS</p>
                                    <p>Class of 2014</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default ProfessionalInfo
