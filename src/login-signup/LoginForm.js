import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Alert from '../common/Alert';
import './Login-SignupForm.css';


const LoginForm = ({login}) => {
  const INITIAL_STATE = {
    username:'',
    password: ''
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
    let result = await login(formData);
    if(result.success){
      history.push('/');
      setFormData(INITIAL_STATE);
    } else {
      setFormErrors(result.err);
    }
  }

  return (
    <div className="Login-SignupForm">
      <h1>Login</h1>
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

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;