import classes from './Information.module.css'

const Information = ({ userDetail, patientDetail, lastWeight }) => {
    return (
        <div className={classes.wrapper}>
            <p>Basic Health Information</p>
            <div className={classes.Information}>
                <p>
                    Height{' '}
                    <span>
                        {patientDetail.height
                            ? `${Math.floor(patientDetail.height / 12)}'${patientDetail.height % 12}"`
                            : ''}
                    </span>
                </p>
                <p>
                    Weight <span> {lastWeight.slot_flt4 ? `${lastWeight.slot_flt4} kg` : ''} </span>
                </p>
                <p>
                    Chronic Disease <span> </span>
                </p>
            </div>
        </div>
    )
}

export default Information
