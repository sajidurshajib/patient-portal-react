import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/index'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
