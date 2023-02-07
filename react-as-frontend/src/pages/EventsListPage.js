import React from 'react';
import PropTypes from 'prop-types';
import EventsList from '../components/EventsList';

function EventsListPage(props) {
  const { eventlist } = props;

  return (
    <>
      <h1 className="display-1">Events</h1>
      <br />
      <EventsList events={eventlist} />
    </>
  );
}

EventsListPage.propTypes = [
  {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
];

export default EventsListPage;
