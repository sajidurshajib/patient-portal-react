import classes from './Information.module.css'

const Information = ({ userDetail, patientDetail, lastWeight }) => {
    return (
        <div className={classes.wrapper}>
            <p>Information</p>
            <div className={classes.Information}>
                {/* <p>
                Height{' '}
                <span>
                    {patientDetail.height
                        ? `${Math.floor(patientDetail.height / 12)}'${patientDetail.height % 12}"`
                        : ''}
                </span>
            </p> */}
                <p>
                    Weight <span> {lastWeight.slot_flt4 ? `${lastWeight.slot_flt4} kg` : ''} </span>
                </p>
                <p>
                    Marital status <span> {patientDetail.marital_status}</span>
                </p>
                <p>
                    Occupation <span> {patientDetail.occupation}</span>
                </p>
                <div className={classes.bio}>
                    <p>Bio</p>
                    <p>{patientDetail.bio}</p>
                </div>
                <p>
                    NID <span> {userDetail.nid}</span>
                </p>
            </div>
        </div>
    )
}

export default Information
