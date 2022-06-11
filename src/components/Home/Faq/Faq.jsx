import React from 'react'
import classes from './Faq.module.css'

export default function Faq() {
    return (
        <div className={classes.content} id="faq">
            <div className={classes.logo}>Frequently Asked Questions</div>
            <div>
                <div>
                    <input type="checkbox" id="q1" className={classes.questions} />
                    <span className={classes.plus}>+</span>
                    <label htmlFor="q1" className={classes.question}>
                        How do I make an appointment?
                    </label>
                    <div className={classes.answers}>
                        Give us a call, or make an appointment to our site and speak to one of our Doctors.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q2" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q2" className={classes.question}>
                        Do I have to be a patient to access your services?
                    </label>
                    <div className={classes.answers}>
                        For the most part, yes. However, you can enroll in our prenatal program even if you are not a
                        patient. Call us for more information.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q3" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q3" className={classes.question}>
                        How do I cancel or reschedule an appointment?
                    </label>
                    <div className={classes.answers}>
                        If you need to cancel or reschedule, please call us. We ask that you call at least 24 hours in
                        advance so that we can best help you reschedule.
                    </div>
                </div>
            </div>
        </div>
    )
}
