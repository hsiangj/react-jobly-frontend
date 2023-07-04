import {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext';
import JoblyApi from './api/api';
import Routes from './routes-nav/Routes';
import Nav from './routes-nav/Nav';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import {decodeToken} from 'react-jwt';


function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage("jobly_token");
  const [currentUser, setCurrentUser] = useState(null);
  const [jobIdsApplied, setJobIdsApplied] = useState(new Set());

  console.debug('App','Current user=', currentUser)
  
  async function signup(signupData){
    try {
      let result = await JoblyApi.signup(signupData);
      setToken(result);
      return {success: true};
    } catch(err) {
      return {success: false, err};
    }
  }

  async function login(loginData){
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return {success: true};
    } catch(err) {
      return {success: false, err};
    }
  }

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  useEffect(function loadUserInfo(){
    async function getCurrentUser() {
      if (token) {
        try {
          let {username} = decodeToken(token);
          JoblyApi.token = token;
          let currUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currUser);
          setJobIdsApplied(new Set(currUser.applications));
        } catch(err) {
          console.error('Error loadUserInfo', err)
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return jobIdsApplied.has(id);
  }

  function applyToJob(id) {
    if(hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setJobIdsApplied(new Set([...jobIdsApplied, id]));
  }
  
  if (!infoLoaded) {
    return <p>Loading &hellip;</p>
  }

  return (
    <div className="App">
      
        <BrowserRouter>
          <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedToJob, applyToJob}}>
            <Nav logout={logout} />
            <main>
            <Routes signup={signup} login={login} />
            </main>
          </UserContext.Provider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
