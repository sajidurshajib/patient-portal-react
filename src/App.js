import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ProfilePage, RegisterPage, LoginPage } from './pages/index'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
