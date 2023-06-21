import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../Home';
import CompanyList from '../CompanyList';
import CompanyDetail from '../CompanyDetail';
import JobList from '../JobList';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import ProfileForm from '../Profile';

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/companies">
        <CompanyList />
      </Route>

      <Route exact path="/companies/:name">
        <CompanyDetail />
      </Route>

      <Route exact path="/jobs">
        <JobList />
      </Route>

      <Route exact path="/login">
        <LoginForm />
      </Route>

      <Route exact path="/signup">
        <SignupForm />
      </Route>

      <Route exact path="/profile">
        <ProfileForm />
      </Route>

      <Redirect to="/" />
    </Switch>

  )
}

export default Routes;