import { React, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import events from './event-content';

function CreateEventPage() {
//   const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const createEvent = async () => {
    console.log([title, description, date]);
  };

  return (
    <>
      <h1>Create Event</h1>
      <input placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input placeholder="Event Date yyyy-mm-dd" value={date} onChange={(e) => setDate(e.target.value)} />
      <button id="create-event-btn" onClick={createEvent} type="submit">
        Create Event
      </button>
    </>
  );
}

export default CreateEventPage;
