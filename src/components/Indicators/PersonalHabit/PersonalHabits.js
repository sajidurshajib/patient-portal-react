import classes from './PersonalHabits.module.css'

const PersonalHabits = () => {
    return (
        <div className={classes.wrapper}>
            <p>Personal Habits</p>
            <div className={classes.PersonalHabits}>
                <div>
                    <p>Smoke</p>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>

                <div>
                    <p>Zarda/Betel Leaf</p>
                    <label className={`${classes.switch} ${classes.labelAlign}`}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>

                <div>
                    <p>Alcohol</p>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PersonalHabits
