
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom' // BrowserRouter as Router
import NotFound from '../NotFound';
import Routage from '../../route/route-user';
import Header from '../../components/Header'

const App = () => {

    const userId = 18;
    return (
        <Router>
            <Header />
            <Switch>
                <Redirect exact from="/" to={`/profil/${userId}`} />
                {
                    Routage().map((route, i) => <Route key={i} path={route.path} component={route.component} />)
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;