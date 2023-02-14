import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function CreateEventPage() {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const createEvent = async () => {
    const eventData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    await axiosInstance.post('/api/events', eventData);

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
      <textarea
        placeholder="Event Description"
        value={enteredDescription}
        onChange={(e) => setEnteredDescription(e.target.value)}
      />
      <input
        type="date"
        value={enteredDate}
        onChange={(e) => setEnteredDate(e.target.value)}
      />
      <button id="create-event-btn" onClick={createEvent} type="submit">
        Create Event
      </button>
    </>
  );
}

export default CreateEventPage;
