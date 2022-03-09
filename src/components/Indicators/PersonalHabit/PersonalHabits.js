import classes from './PersonalHabits.module.css'

const PersonalHabits = () => {
    return (
        <div className={classes.PersonalHabits}>
            <h3>Personal Habits</h3>

            <div className={classes.wrapper}>
                <div>
                    <h4>Smoke</h4>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>

                <div>
                    <h4>Zarda/ Betel Leaf</h4>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span></span>
                    </label>
                </div>

                <div>
                    <h4>Alcohol</h4>
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
