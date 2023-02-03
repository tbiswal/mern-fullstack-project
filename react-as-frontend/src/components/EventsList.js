import React from 'react';
import PropTypes from 'prop-types';

function EventsList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <div>
          <h3>{event.title}</h3>
          <p>{event.description.substring(0, 150)}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
}

EventsList.propTypes = [
  {
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
];

export default EventsList;
