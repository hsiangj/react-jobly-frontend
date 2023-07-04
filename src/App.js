import {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './UserContext';
import JoblyApi from './api/api';
import Routes from './routes-nav/Routes';
import Nav from './routes-nav/Nav';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';
import {decodeToken} from 'react-jwt';


function App() {
  const [token, setToken] = useLocalStorage("jobly_token");
  const [currentUser, setCurrentUser] = useState(null);

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
          
        } catch(err) {
          console.error('Error loadUserInfo')
          setCurrentUser(null);
        }
      }
      
    }

    
    getCurrentUser();
  }, [token]);

 
  return (
    <div className="App">
      
        <BrowserRouter>
          <UserContext.Provider value={{currentUser, setCurrentUser}}>
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
