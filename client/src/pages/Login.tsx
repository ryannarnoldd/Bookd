import { useState, type FormEvent, type ChangeEvent } from 'react';
import Auth from '../utils/auth';
import { login } from '../api/authAPI'; // Assuming login API function is separate
import type { UserLogin } from '../interfaces/UserLogin';
import background from '../../assets/123.avif';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="form-container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent background for the form
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <form className="form login-form" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={loginData.username || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={loginData.password || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ textAlign: 'center' }}>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
