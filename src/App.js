import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, UserInfo } from './allContext'
import {
    HomePage,
    ProfilePage,
    FindDoctorsPage,
    RegisterPage,
    MedicalPage,
    LoginPage,
    IndicatorsPage,
    SettingsPage,
} from './pages/index'
import { authState, authReducer } from './reducer/authReducer'
import { userState, userReducer } from './reducer/userReducer'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return (
        <div>
            <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                    {/* Auth and User context provider  */}
                    <Router>
                        <Switch>
                            <Route path="/" exact={true} component={HomePage} />
                            <ProtectedRoute path="/profile" component={ProfilePage} redirect="/" />
                            <ProtectedRoute path="/doctors" component={FindDoctorsPage} redirect="/" />
                            <ProtectedRoute path="/medicals" component={MedicalPage} redirect="/" />
                            <ProtectedRoute path="/indicators" component={IndicatorsPage} redirect="/" />
                            <ProtectedRoute path="/settings" component={SettingsPage} redirect="/" />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </Router>
                    {/* Auth and User context end */}
                </UserInfo.Provider>
            </Auth.Provider>
        </div>
    )
}

export default App
