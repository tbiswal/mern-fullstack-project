import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EventsList from '../components/EventsList';
import CreateEventPage from './CreateEventPage';
import HorizontalLine from '../components/HorizontalLine';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function EventsListPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventCreatedFlag, setEventCreatedFlag] = useState(false);

  // Pass this handler to child component and set the flag
  // Child to parent argument communication
  const createEventHandler = (flag) => {
    setEventCreatedFlag(flag);
  };

  useEffect(() => {
    setLoading(true);

    const loadEvents = async () => {
      // Todo - Move axios into a file and call that function
      const response = await axiosInstance.get('/api/events');
      const eventInfo = response.data;
      setEvents(eventInfo);
      setLoading(false);
      setEventCreatedFlag(false);
    };

    loadEvents();
  }, [eventCreatedFlag]);

  return (
    <>
      <CreateEventPage onCreated={createEventHandler} />
      <HorizontalLine />
      <h1>List Of Events...</h1>
      <br />
      {loading ? <> Loading...</> : <EventsList events={events} />}
    </>
  );
}

EventsListPage.propTypes = [
  {
    pubId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
];

export default EventsListPage;
