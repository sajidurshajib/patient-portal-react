import React from 'react'
import classes from './Faq.module.css'

export default function Faq() {
    return (
        <div className={classes.content} id="faq">
            <div className={classes.logo}>Frequently Asked Questions</div>
            <div>
                <div>
                    <input type="checkbox" id="q4" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q4" className={classes.question}>
                        What is My health Portal & Can I subscribe for free?
                    </label>
                    <div className={classes.answers}>
                        My Health Portal is one stop digital health care solution for Personal health record &
                        healthcare service management. Yes its free.
                    </div>
                </div>

                <div>
                    <input type="checkbox" id="q5" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q5" className={classes.question}>
                        How can I subscribe?
                    </label>
                    <div className={classes.answers}>
                        Through registration by unique mobile number with some basic information.
                    </div>
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
                        How will update my health record & How can I record for future?
                    </label>
                    <div className={classes.answers}>
                        By updating health indicator by yourself & health professional. By uploading picture in PDF or
                        JPG format, you can record your prescriotipn, report & other file.
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
                        Can I add family member for emergency contact & Can I store & operate my family health record
                        too?
                    </label>
                    <div className={classes.answers}> Yes, you can.</div>
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
                    <input type="checkbox" id="q16" className={classes.questions} />
                    <div className={classes.plus}>+</div>
                    <label htmlFor="q16" className={classes.question}>
                        For emergency support - how can I reach?
                    </label>
                    <div className={classes.answers}>
                        Call to our contact number, send text at +8801322658481 or email us at contact@healthx.com.bd
                    </div>
                </div>
            </div>
        </div>
    )
}
