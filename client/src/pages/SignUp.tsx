import { useState, type FormEvent, type ChangeEvent } from 'react';
import { signUp } from '../api/authAPI'; // Assuming sign-up API function is separate
import type { UserSignUp } from '../interfaces/UserSignUp';
import Auth from '../utils/auth';
import background from '../../assets/123.avif';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<UserSignUp>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUp(signUpData);
      Auth.login(data.token);
      console.log('User signed up successfully:', data);
    } catch (err) {
      console.error('Failed to sign up', err);
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
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for form
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <form className="form signup-form" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={signUpData.username || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={signUpData.email || ''}
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
              value={signUpData.password || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ textAlign: 'center' }}>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
