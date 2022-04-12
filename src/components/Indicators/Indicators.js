import { Sidebar } from '../Nav'
import classes from './Indicators.module.css'

const Indicators = () => {
    return (
        <div className={classes.Indicators}>
            <div>
                <Sidebar />
            </div>
            <div>
                <h3>Hello Indicators</h3>
            </div>
        </div>
    )
}

export default Indicators
