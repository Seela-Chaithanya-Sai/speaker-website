function Events() {
  const events = [
    {
      date: "SEP 15",
      title: "Leadership Summit 2026",
      location: "Bangalore, India",
      type: "Keynote"
    },
    {
      date: "OCT 02",
      title: "Future of Work Conference",
      location: "Hyderabad, India",
      type: "Conference"
    },
    {
      date: "NOV 18",
      title: "Young Leaders Forum",
      location: "Mumbai, India",
      type: "Workshop"
    }
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="section-label">EVENTS</p>
        <h1>Where ideas meet action.</h1>
        <p>
          Upcoming speaking engagements, conferences, workshops, and
          leadership programs.
        </p>
      </div>

      <div className="event-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <span>{event.date}</span>

            <h2>{event.title}</h2>

            <p>{event.location}</p>

            <strong>{event.type}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
