import classes from './Indicators.module.css'
import { Bp, Pulse, Rbs, Weight } from './index.js'

const Indicators = () => {
    return (
        <div className={classes.Indicators}>
            <div className={classes.grid}>
                <Bp />
                <Rbs />
                <Weight />
                <Pulse />
            </div>
        </div>
    )
}

export default Indicators
