import {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../Home';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import LoginForm from '../login-signup/LoginForm';
import SignupForm from '../login-signup/SignupForm';
import ProfileForm from '../Profile';





const Routes = ({signup, login}) => {

 

  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/companies">
        <CompanyList />
      </Route>

      <Route exact path="/companies/:companyHandle">
        <CompanyDetail />
      </Route>

      <Route exact path="/jobs">
        <JobList />
      </Route>

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