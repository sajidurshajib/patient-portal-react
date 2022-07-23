import { faCalendarPlus, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './Events.module.css'

export default function Events() {
    const date = new Date()
    const today = date.toString()

    return (
        <div className={classes.calenderWrapper}>
            <header className={classes.header}>
                <div className={classes.container}>
                    <span>Welcome Back!</span>
                    <h1>Calendar Plan</h1>
                    <div className={classes.menuToggle}>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            <section className={classes.todayBox}>
                <span className={classes.breadcrumb}>Today</span>
                <h3 className={classes.dateTitle}>
                    {today.slice(4, 10)}, {today.slice(11, 15)}
                </h3>
                <div className={classes.plusIcon}>
                    <FontAwesomeIcon icon={faCalendarPlus} />
                </div>
            </section>

            <section className={classes.upcomingEvents}>
                <div className={classes.container}>
                    <h3>Upcoming Events</h3>
                    <div className={classes.eventWrapper}>
                        <div className={classes.event}>
                            <FontAwesomeIcon icon={faFire} className={classes.i} />
                            <h4 className={classes.eventTime}>11:00 am</h4>
                            <span className={classes.eventTimeLeft}>in 30 minutes</span>
                            <p className={classes.eventDescription}>Monday briefing with the doctor.</p>
                        </div>
                        <div className={classes.event}>
                            <FontAwesomeIcon icon={faFire} className={classes.i} />
                            <h4 className={classes.eventTime}>12:00 pm</h4>
                            <span className={classes.eventTimeLeft}>in 1 hour</span>
                            <p className={classes.eventDescription}>Appointment with doctor!</p>
                        </div>
                        <div className={classes.event}>
                            <FontAwesomeIcon icon={faFire} className={classes.i} />
                            <h4 className={classes.eventTime}>13:00 pm</h4>
                            <span className={classes.eventTimeLeft}>in 2 hours</span>
                            <p className={classes.eventDescription}>Meeting with consultant!</p>
                        </div>
                    </div>
                    <button className={classes.eventButton}>
                        <span className={classes.eventButtonTitle}>+ Add Event</span>

                        {/* <span className={classes.eventButtonIcon}>
                            <FontAwesomeIcon icon={faPlus} className={classes.i} />
                        </span> */}
                    </button>
                </div>
            </section>
        </div>
    )
}
