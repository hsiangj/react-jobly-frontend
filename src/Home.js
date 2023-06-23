import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import UserContext from "./UserContext";

const Home = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <div>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {currentUser
        ? <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
        : <p><Link to='/signup'>Signup</Link> to start applying for jobs.</p>}
      
    </div>
    
  )

}

export default Home;

