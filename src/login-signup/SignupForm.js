import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Alert from '../common/Alert';
import './Login-SignupForm.css';

const SignupForm = ({signup}) => {
  const INITIAL_STATE = {
    username:'',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(data => ({...data, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await signup(formData);
    if(result.success){
      history.push('/');
      setFormData(INITIAL_STATE);
    } else {
      setFormErrors(result.err);
    }
  }

  return (
    <div className="Login-SignupForm">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
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

        {formErrors.length
          ? formErrors.map(error => <Alert err={error} />)
          : null
        }

        <button>Sign up!</button>
      </form>
    </div>
  )
}

export default SignupForm;