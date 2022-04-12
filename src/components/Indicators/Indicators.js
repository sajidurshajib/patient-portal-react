import { Sidebar } from '../Nav'
import classes from './Indicators.module.css'
import { Bp, Pulse, Rbs } from './index.js'

const Indicators = () => {
    return (
        <div className={classes.Indicators}>
            <div>
                <Sidebar />
            </div>
            <div>
                <h3>Hello Indicators</h3>
                <Bp />
                <Rbs />
                <Pulse />
            </div>
        </div>
    )
}

export default Indicators
