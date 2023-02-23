import React from 'react';
import PropTypes from 'prop-types';

function EventsList({ events }) {
  return (
    <div>
      {events.map((event) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={event.pubId}>
          <h3>{event.title}</h3>
          <p>{event.description.substring(0, 150)}</p>
          <p>{event.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

EventsList.propTypes = [
  {
    pubId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  },
];

export default EventsList;
