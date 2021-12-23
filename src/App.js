import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage, ProfilePage } from './pages/index'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/profile" exact={true} component={ProfilePage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
