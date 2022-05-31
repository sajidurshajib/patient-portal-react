import classes from './Family.module.css'
import Members from './Members/Members'

const Family = () => {
    return (
        <div className={classes.Family}>
            <h3>Family members</h3>
            <div className={classes.Header}>
                <form>
                    <input type="text" placeholder="Search by a phone number" />
                </form>
            </div>
            <div div className={classes.Content}>
                <Members />
                <Members />
                <Members />
                <Members />
            </div>
        </div>
    )
}
export default Family
