import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import EventsListPage from './pages/EventsListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await axios.get('/api/events');
      const eventInfo = response.data;
      setEvents(eventInfo);
    };

    loadEvents();
  }, []);

  const addEventHandler = (enteredEventdata) => {
    const eventData = {
      ...enteredEventdata,
      id: Math.random().toString(),
    };

    // Updating the old snapots of events
    setEvents((prevEvents) => [eventData, ...prevEvents]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event-list" element={<EventsListPage eventlist={events} />} />
            <Route
              path="/create-event"
              element={<CreateEventPage onAddEvent={addEventHandler} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
