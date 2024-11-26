import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div className='display-flex justify-space-between align-center py-2 px-5 mint-green'>
      <h1>Bookd</h1>
      <div>
        {!loginCheck ? (
          <div>
          <button className='btn' type='button'>
          <Link to='/signup'>Sign Up</Link>
        </button>
          <button className='btn' type='button'>
            <Link to='/login'>Login</Link>
          </button>
          </div>
        ) : (
          <div>
          <button className='btn' type='button'>
            <Link to='/create'>Create</Link>
          </button>
          <button
            className='btn'
            type='button'
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </button>
          </div>

        )}
      </div>
    </div>
  );
};

export default Navbar;
