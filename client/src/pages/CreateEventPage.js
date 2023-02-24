import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import useUser from '../hooks/useUser';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function CreateEventPage() {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState(moment().toDate());
  const { user } = useUser();

  const createEvent = async () => {
    const eventData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    await axiosInstance.post('/api/events', eventData, { headers });
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
