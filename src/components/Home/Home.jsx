import React from 'react'
import { Sidebar } from '../Nav'
import Event from './Events/Events'
import classes from './Home.module.css'
import ProfileCard from './ProfileCard/ProfileCard'
import Recent from './Recent/Recent'
import Summery from './Summery/Summery'

export default function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.sidebar}>
                <Sidebar />
            </div>
            <div className={classes.wrapper}>
                <div>
                    <Summery />
                    <Recent />
                </div>
                <div>
                    <ProfileCard />
                    <Event />
                </div>
            </div>
        </div>
    )
}
