import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import useUser from '../hooks/useUser';
import './CreateEventPage.css';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const validateEmpty = (value) => value == null || value.length === 0 || value === undefined;

function CreateEventPage() {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState(moment().toDate());
  const [error, setError] = useState('');
  const { user } = useUser();

  const createEvent = async () => {
    const eventData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    if (validateEmpty(enteredTitle)) {
      setError('Title required');
      return;
    }

    if (validateEmpty(enteredDescription)) {
      setError('Description required');
      return;
    }

    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    await axiosInstance.post('/api/events', eventData, { headers });
    navigate('/event-list');
  };

  return (
    <>
      <h1>Create Event</h1>
      {error && <p className="error">{error}</p>}
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
      <DatePicker
        wrapperClassName="datepicker"
        selected={enteredDate}
        onChange={(date) => setEnteredDate(date)}
        minDate={moment().toDate()}
      />

      {user ? (
        <button id="create-event-btn" onClick={createEvent} type="submit">
          Create Event
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            navigate('/login');
          }}
        >
          Log in to create event
        </button>
      )}
    </>
  );
}

export default CreateEventPage;
