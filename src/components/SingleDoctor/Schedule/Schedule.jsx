import React from 'react'
import classes from './Schedule.module.css'

export default function Schedule() {
    const date = new Date()
    const today = date.toString()

    let slot = [
        { time: '11:30 AM' },
        { time: '12:30 PM' },
        { time: '01:30 PM' },
        { time: '03:30 PM' },
        { time: '04:30 PM' },
        { time: '05:30 PM' },
        { time: '06:30 PM' },
        { time: '07:30 PM' },
    ]
    return (
        <div className={classes.wrapper}>
            <div className={classes.slot}>
                <div className={classes.slotHead}>
                    {today.slice(4, 10)}, {today.slice(11, 15)} (Online)
                </div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {slot.map((slot, i) => {
                            return (
                                <div className={classes.slotButton} key={i}>
                                    <button>{slot.time}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={classes.slot}>
                <div className={classes.slotHead}>
                    {today.slice(4, 10)}, {today.slice(11, 15)} (Offline)
                </div>
                <div className={classes.slotBody}>
                    <div className={classes.slotButtons}>
                        {slot.map((slot, i) => {
                            return (
                                <div className={classes.slotButton} key={i}>
                                    <button>{slot.time}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
