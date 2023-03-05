import { React, useState } from 'react';
import PropTypes from 'prop-types';
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

function CreateEventPage(props) {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState(moment().toDate());
  const [error, setError] = useState('');
  const { user } = useUser();

  // onCreated is a function supplied from parent component called EventList
  const { onCreated } = props;

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

    // Todo - Validate token in frontend and redirect to login
    const headers = token ? { authtoken: token } : {};

    await axiosInstance.post('/api/events', eventData, { headers });
    onCreated(true);
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredDate(moment().toDate());
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

CreateEventPage.propTypes = [
  {
    onEdit: PropTypes.string,
  },
];

export default CreateEventPage;
