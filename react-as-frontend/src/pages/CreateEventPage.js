import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CreateEventPage(props) {
  const { onAddEvent } = props;
    const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const createEvent = () => {
    const eventData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    onAddEvent(eventData);
    navigate('/event-list');
  };

  return (
    <>
      <h1>Create Event</h1>
      <input
        placeholder="Event Title"
        value={enteredTitle}
        onChange={(e) => setEnteredTitle(e.target.value)}
      />
      <input
        placeholder="Event Description"
        value={enteredDescription}
        onChange={(e) => setEnteredDescription(e.target.value)}
      />
      <input
        placeholder="Event Date yyyy-mm-dd"
        value={enteredDate}
        onChange={(e) => setEnteredDate(e.target.value)}
      />
      <button id="create-event-btn" onClick={createEvent} type="submit">
        Create Event
      </button>
    </>
  );
}

CreateEventPage.propTypes = { onAddEvent: PropTypes.func.isRequired };

export default CreateEventPage;
