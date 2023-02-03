import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import EventsListPage from './pages/EventsListPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <EventsListPage />
    </div>
  );
}

export default App;
