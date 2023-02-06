import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/event-list">Events</Link>
        </li>
        <li>
          <Link to="/create-event">Create Event</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
