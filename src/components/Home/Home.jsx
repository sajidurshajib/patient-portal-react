import React from 'react'
import AvailableDoctor from './AvailableDoctor/AvailableDoctor'
import CurrentPlan from './CurrentPlan/CurrentPlan'
import Event from './Events/Events'
import classes from './Home.module.css'
import OfferInfo from './OfferInfo/OfferInfo'
import PersonalDoctor from './PersonalDoctor/PersonalDoctor'
import ProfileCard from './ProfileCard/ProfileCard'
import Recent from './Recent/Recent'
import Summery from './Summery/Summery'

export default function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <div>
                    <OfferInfo />
                    <AvailableDoctor />
                    <br />
                    <Summery />
                    {/* <CurrentPlan /> */}
                    {/* <Recent /> */}
                </div>
                <div className={classes.info}>
                    <div>
                        <ProfileCard />
                        <Event />
                        <PersonalDoctor />
                    </div>
                </div>
            </div>
        </div>
    )
}
