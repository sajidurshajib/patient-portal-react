import classes from './Address.module.css'

const Address = ({ userDetail }) => {
    return (
        <div className={classes.wrapper}>
            <p>Residence Address</p>
            <div className={classes.Address}>
                <p>
                    Country <span> {userDetail.country}</span>
                </p>
                <p>
                    Division <span> {userDetail.division}</span>
                </p>
                <p>
                    District <span> {userDetail.district}</span>
                </p>
                <p>
                    Sub-District <span> {userDetail.sub_district}</span>
                </p>
                <p>
                    Thana/Ward <span> {userDetail.sub_district}</span>
                </p>
                <p>
                    Postal code <span> {userDetail.post_code}</span>
                </p>
            </div>
        </div>
    )
}

export default Address
