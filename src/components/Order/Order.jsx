import MedicineOrder from './MedicineOrder/MedicineOrder'
import classes from './Order.module.css'

export default function Order() {
    return (
        <div className={classes.order}>
            <div>
                <MedicineOrder />
            </div>
        </div>
    )
}
