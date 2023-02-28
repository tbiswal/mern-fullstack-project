import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from './hooks/useUser';
import './NavBar.css';

function NavBar() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/event-list">Events</Link>
        </li>
        <li>
          <Link to="/create-event">Create Event</Link>
        </li>
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            type="button"
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              // signOut(getAuth());
              navigate('/login');
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
