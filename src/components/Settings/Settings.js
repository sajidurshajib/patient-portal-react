import { useState } from 'react'
import ChangePassword from './ChangePassword/ChangePassword'
import General from './General/General'
import PatientInfo from './PatientInfo/PatientInfo'
import classes from './Settings.module.css'
import UserDetail from './UserDetail/UserDetail'

const Settings = () => {
    const [menu, setMenu] = useState(1)
    return (
        <div className={classes.Settings}>
            <div className={classes.Wrapper}>
                <div>
                    <div className={classes.Nav}>
                        <span
                            className={menu === 1 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(1)}>
                            General
                        </span>
                        <span
                            className={menu === 2 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(2)}>
                            User Detail
                        </span>
                        <span
                            className={menu === 3 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(3)}>
                            Personal Information
                        </span>
                        <span
                            className={menu === 4 ? `${classes.activeNav}` : `${classes.deactiveNav}`}
                            onClick={(e) => setMenu(4)}>
                            Change Password
                        </span>
                    </div>
                    <div>
                        {menu === 1 ? <General /> : null}
                        {menu === 2 ? <UserDetail /> : null}
                        {menu === 3 ? <PatientInfo /> : null}
                        {menu === 4 ? <ChangePassword /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
