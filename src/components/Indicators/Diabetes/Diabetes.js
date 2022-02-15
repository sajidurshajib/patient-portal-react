import { useState } from 'react'
import classes from './Diabetes.module.css'

const Diabetes = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={classes.Diabetes}>
            <div className={classes.header}>
                <h3>Diabetes</h3>
                <span onClick={(e) => setToggle(!toggle)}></span>
            </div>
            <div className={classes.body}>
                <div className={classes.field}>
                    <input type="number" placeholder="18" /> <span>mmol/L</span>
                </div>
            </div>
        </div>
    )
}

export default Diabetes
