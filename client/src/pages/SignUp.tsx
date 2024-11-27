import { useState, type FormEvent, type ChangeEvent } from 'react';
import { signUp } from '../api/authAPI'; // Assuming sign-up API function is separate
import type { UserSignUp } from '../interfaces/UserSignUp';
import Auth from '../utils/auth';


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
      // Optionally, log the user in after sign-up if required
      console.log('User signed up successfully:', data);

    } catch (err) {
      console.error('Failed to sign up', err);
    }
  };

  return (
    <div className="form-container">
      <form className="form signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
