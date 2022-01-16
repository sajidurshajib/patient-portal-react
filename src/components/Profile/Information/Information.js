import classes from './Information.module.css'

const Information = () => {
    return (
        <div className={classes.Information}>
            <h3>Information</h3>
            <p>
                Blood group <span>A+</span>
            </p>
            <p>
                Height <span>5'9"</span>
            </p>
            <p>
                Weight <span>70 kg</span>
            </p>
        </div>
    )
}

export default Information
