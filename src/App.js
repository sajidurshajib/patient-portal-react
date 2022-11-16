import { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, UserInfo } from './allContext'
import Test from './components/Test/Test'
import { LayoutProvider } from './context/layouContext'
import TestPage from './pages/TestPage'
import {
    LandingPage,
    HomePage,
    ProfilePage,
    FindDoctorsPage,
    RegisterPage,
    MedicalPage,
    LoginPage,
    IndicatorsPage,
    SettingsPage,
    OrderPage,
    SingleDoctorPage,
    PlanSubscribePage,
    ErrorPage,
    HealthPlanPage,
    PrescriptionPage,
    ForgotPasswordPage,
    ChangePasswordPage,
} from './pages/index'
import { authState, authReducer } from './reducer/authReducer'
import { userState, userReducer } from './reducer/userReducer'
import PlanRoute from './routes/PlanRoute'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return (
        <div>
            <LayoutProvider>
                <Auth.Provider value={{ stateAuth, dispatchAuth }}>
                    <UserInfo.Provider value={{ stateUser, dispatchUser }}>
                        {/* Auth and User context provider  */}
                        <Router>
                            <Switch>
                                <Route path="/" exact={true} component={LandingPage} />
                                <Route path="/check" component={Test} />
                                <PlanRoute
                                    path="/plan-subscribe"
                                    component={PlanSubscribePage}
                                    redirect="/plan-subscribe"
                                />
                                <ProtectedRoute path="/home" component={HomePage} redirect="/" />
                                <ProtectedRoute path="/profile" component={ProfilePage} redirect="/" />
                                <ProtectedRoute path="/medicals" component={MedicalPage} redirect="/" />
                                <ProtectedRoute path="/prescriptions" component={PrescriptionPage} redirect="/" />
                                <ProtectedRoute path="/indicators" component={IndicatorsPage} redirect="/" />
                                <ProtectedRoute path="/medicines" component={OrderPage} redirect="/" />
                                <ProtectedRoute path="/doctors" component={FindDoctorsPage} redirect="/" />
                                <ProtectedRoute path="/doctor/:id" component={SingleDoctorPage} redirect="/" />
                                <ProtectedRoute path="/settings" component={SettingsPage} redirect="/" />
                                <ProtectedRoute path="/health-plans" component={HealthPlanPage} redirect="/" />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/test" component={TestPage} />
                                <Route path="/forgot-password" component={ForgotPasswordPage} />
                                <Route path="/reset-password" component={ChangePasswordPage} />
                                <Route path="*" exact={true} component={ErrorPage} />
                            </Switch>
                        </Router>
                        {/* Auth and User context end */}
                    </UserInfo.Provider>
                </Auth.Provider>
            </LayoutProvider>
        </div>
    )
}

export default App
