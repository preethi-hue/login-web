import React,{useState}from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/Login', {
        email,
        password,
      });

      if (res.data.status === 'ok') {
        alert('Login successful');
        navigate('/');
      } else {
        alert(res.data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:',error);
      alert('An error occurred: ' + error.message);
    }
  };

    return (
        <div className="form-container">
        <form onSubmit={LoginUser}>
        <h2>Login</h2>
        <input type="email" className="custom-input"placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="custom-input"placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="custom-button">Login</button>
      </form>
    </div>
  );
}

export default Login;