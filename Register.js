import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/register', {
        email,
        password,
      });

      if (res.data.status === 'ok') {
        alert('Registration successful');
        navigate('/');
      } else {
        alert(res.data.error || 'Registration failed');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={registerUser}>
        <h2>Register</h2>
        <input
          type="email"
          className="custom-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="custom-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit" className="custom-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
