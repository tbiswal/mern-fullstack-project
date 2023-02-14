import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EventsList from '../components/EventsList';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function EventsListPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await axiosInstance.get('/api/events');
      const eventInfo = response.data;
      setEvents(eventInfo);
    };

    loadEvents();
  }, []);

  return (
    <>
      <h1 className="display-1">Events</h1>
      <br />
      <EventsList events={events} />
    </>
  );
}

EventsListPage.propTypes = [
  {
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
];

export default EventsListPage;
