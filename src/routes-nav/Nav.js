import {useContext} from 'react';
import UserContext from '../context/UserContext';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = ({logout}) => {
  const {currentUser} = useContext(UserContext);

  return (
    <nav className="Nav">
      <div className="Nav-brand">
        <Link to="/">
          Jobly
        </Link>
      </div>

      <div className="Nav-links">
        {currentUser
          ? ( <>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Link to="/" onClick={logout}>Logout {currentUser.username}</Link>
          </> )
          : (<>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          </>)
        }
        

        
      </div>
    </nav>
  )
}

export default Nav;