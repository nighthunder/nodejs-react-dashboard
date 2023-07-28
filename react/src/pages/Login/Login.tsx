import React, { useState } from 'react';
import './styles.css';

interface LoginFormState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here using formData.email and formData.password
    console.log('Login data:', formData);
    // You can make an API call here to authenticate the user
  };

  return (
    <div className="login-container">
      <h1>Management Portal</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <a href="/register" className="register-link">
        Don't have an account? Register here.
      </a>
      <button className="google-login-btn" onClick={() => console.log('Login with Google')}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
