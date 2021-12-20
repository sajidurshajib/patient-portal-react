import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Profile, Login, Register } from './components/index'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
