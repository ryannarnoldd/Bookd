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

    <div className="d-flex justify-content-between align-items-center py-2 px-5" style={{ backgroundColor: '#f5f5dc' }}>
      <h1 style={{ margin: 0 }}>Bookd</h1>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" type="button">
          <Link to="/mainfeed" className="text-white text-decoration-none">Main Feed</Link>
        </button>
        {!loginCheck ? (
          <button className="btn btn-success" type="button">
            <Link to="/login" className="text-white text-decoration-none">Login</Link>
          </button>
          </div>
        ) : (
          <>
            <button className="btn btn-primary" type="button">
              <Link to="/create" className="text-white text-decoration-none">Create</Link>
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
