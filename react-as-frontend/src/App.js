import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import EventsListPage from './pages/EventsListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event-list" element={<EventsListPage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
