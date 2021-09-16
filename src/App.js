import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import PreSignUp from './components/PreSignUp';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/login' component={Login} />
          <Route path='/pre-signup' component={PreSignUp} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
