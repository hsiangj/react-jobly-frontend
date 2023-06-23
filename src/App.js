import {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './UserContext';
import JoblyApi from './api/api';
import Routes from './routes-nav/Routes';
import Nav from './routes-nav/Nav';
import './App.css';
import {decodeToken} from 'react-jwt';


function App() {
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
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
      console.log(token)
      return {success: true};
    } catch(err) {
      return {success: false, err};
    }
  }

  useEffect(function loadUserInfo(){
    async function getCurrentUser() {
      if (token) {
        console.log(token)
        try {
          let {username} = decodeToken(token);
          JoblyApi.token = token;
          let currUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currUser);
          console.log(currUser)
        } catch(err) {
          console.log('ERROR FOUND')
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
            <Nav />
            <main>
            <Routes signup={signup} login={login}/>
            </main>
          </UserContext.Provider>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
