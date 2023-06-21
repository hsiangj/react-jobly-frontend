import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav-brand">
        <Link to="/">
          Jobly
        </Link>
      </div>

      <div className="Nav-links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>

        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  )
}

export default Nav;