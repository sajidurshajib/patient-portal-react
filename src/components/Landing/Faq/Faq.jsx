import React from 'react'
import classes from './Faq.module.css'

export default function Faq() {
    return (
        <div className={classes.content} id="faq">
            <div className={classes.logo}>Frequently Asked Questions</div>
            <div>
                {/* <div>
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
                </div> */}

                <div>
                    <input type="checkbox" id="q4" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q4" className={classes.question}>
                        What is My health Portal?
                    </label>
                    <div className={classes.answers}>
                        My Health Portal is one stop digital health care solution for personal health record &
                        healthcare service management.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        Can I subscribe for free?
                    </label>
                    <div className={classes.answers}>Yes its free.</div>
                </div>

                <div>
                    <input type="checkbox" id="q6" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q6" className={classes.question}>
                        How can I subscribe?
                    </label>
                    <div className={classes.answers}>By click on registration.</div>
                </div>

                <div>
                    <input type="checkbox" id="q7" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q7" className={classes.question}>
                        Can I register my family member on behalf of them?
                    </label>
                    <div className={classes.answers}>
                        Yes, but you have needed a unique mobile number for registration.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q8" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q8" className={classes.question}>
                        How will update my health record?
                    </label>
                    <div className={classes.answers}>
                        By updating health indicator by yourself & health professional.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q9" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q9" className={classes.question}>
                        How medical record will update?
                    </label>
                    <div className={classes.answers}>
                        By uploading pic in PDF or JPG, by doctors prescription or from report.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q10" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q10" className={classes.question}>
                        How do I update my & family information?
                    </label>
                    <div className={classes.answers}>Through setting section, update family information.</div>
                </div>

                <div>
                    <input type="checkbox" id="q11" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q11" className={classes.question}>
                        Can I add family member for emergency Contact?
                    </label>
                    <div className={classes.answers}>Yes, you can.</div>
                </div>

                <div>
                    <input type="checkbox" id="q12" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q12" className={classes.question}>
                        How can I book family doctor?
                    </label>
                    <div className={classes.answers}>By booking appointment through schedule for doctor.</div>
                </div>

                <div>
                    <input type="checkbox" id="q13" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q13" className={classes.question}>
                        My Health Portal, is it app based or through website?
                    </label>
                    <div className={classes.answers}>
                        Initially web based solution but ultimately it will be app based.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q14" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q14" className={classes.question}>
                        Can I operate & store my family health record instead of them?
                    </label>
                    <div className={classes.answers}>Sure, you can.</div>
                </div>

                <div>
                    <input type="checkbox" id="q15" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q15" className={classes.question}>
                        How will I record information?
                    </label>
                    <div className={classes.answers}>
                        Some will give given by yourself, some will be given or updated by health professionals.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q16" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q16" className={classes.question}>
                        For emergency support - how can I reach?
                    </label>
                    <div className={classes.answers}>Call to our contact number or send text or email us.</div>
                </div>
            </div>
        </div>
    )
}
