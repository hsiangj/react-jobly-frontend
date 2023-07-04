import {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../Home';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import LoginForm from '../login-signup/LoginForm';
import SignupForm from '../login-signup/SignupForm';
import ProfileForm from '../profile/Profile';
import PrivateRoute from './PrivateRoute';


const Routes = ({signup, login}) => {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:companyHandle">
        <CompanyDetail />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <JobList />
      </PrivateRoute>

      <Route exact path="/login">
        <LoginForm login={login}/>
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup}/>
      </Route>

      <Route exact path="/profile">
        <ProfileForm />
      </Route>

      <Redirect to="/" />
    </Switch>

  )
}

export default Routes;