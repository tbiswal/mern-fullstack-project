import React from 'react';
import EventsList from '../components/EventsList';
import events from './event-content';

function EventsListPage() {
  return (
    <>
      <h1 className="display-1">Events</h1>
      <br />
      <EventsList events={events} />
    </>
  );
}

export default EventsListPage;
