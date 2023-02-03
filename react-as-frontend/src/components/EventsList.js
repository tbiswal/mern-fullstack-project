function EventsList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <div>
          <h3>{event.title}</h3>
          <p>{event.description.substring(0, 150)}...</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
}

export default EventsList;
