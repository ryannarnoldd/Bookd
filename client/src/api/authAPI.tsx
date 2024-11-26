import type { UserLogin } from '../interfaces/UserLogin';
import { UserSignUp } from '../interfaces/UserSignUp';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from user login: ', err);
    return Promise.reject('Could not fetch user info');
  }
};

const signUp = async (userInfo: UserSignUp) => {
  try {
    const response = await fetch('/auth/signup', { // Use the correct endpoint for user creation
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      // Optionally include the server-provided message for better debugging
      const errorMessage = data.message || 'Sign-up failed, check network tab!';
      throw new Error(errorMessage);
    }

    return data;
  } catch (err) {
    console.error('Error from user sign-up: ', err);
    return Promise.reject('Could not create user');
  }
};

export { login , signUp};
