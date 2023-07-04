import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import JoblyApi from "../api/api";
import Alert from "../common/Alert";
import './Profile.css';

const ProfileForm = () => {

  const {currentUser, setCurrentUser } = useContext(UserContext);

  const INITIAL_STATE = {
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    password: '',
    email: currentUser.email
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);
  const [saveStatus, setSaveStatus] = useState(false);
  
  console.debug('Profile', 'currentUser=', currentUser)
  console.debug('Profile', 'formData.username=', formData.username)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({...data, [name]: value}));
    setFormErrors([]);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;
    try{
      updatedUser = await JoblyApi.updateProfile(username, profileData)
    } catch (err) {
      setFormErrors(err);
      return;
    }
    
    setFormData(data => ({...data, password: ''}));
    setFormErrors([]);
    setSaveStatus(true);
    setCurrentUser(updatedUser);
  }

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Username</label>
          <input 
            type="text"
            name="username"
            value={formData.username}
            disabled="disabled"
          />
        </div>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
         </div>

         <div>
            <label htmlFor="password">Confirm password to make changes or enter new password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

        {formErrors.length
          ? formErrors.map(error => <Alert err={error} />)
          : null
        }

        {saveStatus 
          ? <p>Changes updated successfully.</p>
          : null}

        <button>Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileForm;