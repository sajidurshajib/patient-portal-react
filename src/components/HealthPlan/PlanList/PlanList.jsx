import { useState } from 'react'
import Family from '../../../assets/img/offer/plan4.png'
import PlanForm from './PlanForm/PlanForm'
import classes from './PlanList.module.css'

export default function PlanList({ plans }) {
    const [openForm, setOpenForm] = useState(false)

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {plans &&
                    plans.map((plan, index) =>
                        plan.plan_type === 'health_plan' ? (
                            <div className={classes.containerFlex}>
                                <div>
                                    <img src={Family} alt="" />
                                </div>
                                <div>
                                    <h6>{plan.name}</h6>
                                    <p>{plan.details}</p>
                                    <p>
                                        ৳{plan.fee}
                                        <span>/for {plan.total_patients} Adult</span>
                                    </p>
                                    <p>
                                        {Math.floor(plan.days / 30) === 0 ? 1 : Math.floor(plan.days / 30)}{' '}
                                        {plan.days / 30 > 1
                                            ? 'Months'
                                            : Math.floor(plan.days / 30) === 0
                                            ? 'Day'
                                            : 'Month'}{' '}
                                        Plan
                                    </p>
                                </div>
                                <button onClick={() => setOpenForm(index)}>Subscribe</button>
                                {openForm === index && <PlanForm setOpenForm={setOpenForm} plan={plan} />}
                            </div>
                        ) : (
                            ''
                        )
                    )}
            </div>
        </div>
    )
}
