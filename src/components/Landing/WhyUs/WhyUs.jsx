import '@fortawesome/free-solid-svg-icons'
import {
    faHandHoldingHeart,
    faHandshake,
    faHeadset,
    faLightbulb,
    faMobileAlt,
    faStethoscope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from './WhyUs.module.css'

export default function WhyUs() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.flexBox}>
                    <p>
                        Why Choose <span>My Health Portal?</span>
                    </p>
                    <div>
                        <Link to="#">
                            <button>Learn more about My Health Portal</button>
                        </Link>
                    </div>
                </div>
                <div className={classes.gridBox}>
                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faLightbulb} />
                            </span>
                            <p>One Stop Solution</p>
                        </p>
                        <span>
                            Search Doctor, Online Consultation, Medicine delivery, Medical report & history record from
                            one solution.
                        </span>
                    </div>

                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </span>
                            <p>Easy to Use</p>
                        </p>
                        <span>
                            Get the best user experience on My Health Portal with innovative & Comprehensive feature.
                        </span>
                    </div>

                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faHandshake} />
                            </span>
                            <p>Experience Health Professional</p>
                        </p>
                        <span>
                            Trusted, Experienced, BMDC registered doctors, specialists and verified health professional
                            operates to the highest clinical standards.
                        </span>
                    </div>

                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faStethoscope} />
                            </span>
                            <p>Dedicated Family Doctor</p>
                        </p>
                        <span>
                            24x7 dedicated family doctor will ensure primary & preventive health care for your personal
                            & family member as well medical advisor for your wellbeing.
                        </span>
                    </div>

                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </span>
                            <p>Better Service Quality</p>
                        </p>
                        <span>
                            Our doctors are committed to provide the best service by spending enough time required for
                            the consultation. We constantly improve our service from feedback provided by patients.
                        </span>
                    </div>

                    <div>
                        <p>
                            <span>
                                <FontAwesomeIcon icon={faHeadset} />
                            </span>
                            <p>Super-Fast Support</p>
                        </p>
                        <span>
                            Our dedicated customer service team is available to assist you resolving any issues or
                            answering any queries. We are happy to help.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
