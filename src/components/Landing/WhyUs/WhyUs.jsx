import React from 'react'
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
                        <button>Learn more about My Health Portal</button>
                    </div>
                </div>
                <div className={classes.gridBox}>
                    <div>
                        <p>
                            <span>Icon1</span>
                            <p>Onestop Solution 1</p>
                        </p>
                        <span>Details of onestop solution 1</span>
                    </div>
                    <div>
                        <p>
                            <span>Icon2</span>
                            <p>Onestop Solution 2</p>
                        </p>
                        <span>Details of onestop solution 2</span>
                    </div>

                    <div>
                        <p>
                            <span>Icon3</span> <p>Onestop Solution 3</p>
                        </p>
                        <span>Details of onestop solution 3</span>
                    </div>
                    <div>
                        <p>
                            <span>Icon3</span> <p>Onestop Solution 4</p>
                        </p>
                        <span>Details of onestop solution 4</span>
                    </div>

                    <div>
                        <p>
                            <span>Icon3</span> <p>Onestop Solution 5</p>
                        </p>
                        <span>Details of onestop solution 5</span>
                    </div>
                    <div>
                        <p>
                            <span>Icon3</span> <p>Onestop Solution 6</p>
                        </p>
                        <span>Details of onestop solution 6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
