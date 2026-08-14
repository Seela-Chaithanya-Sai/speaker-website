function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your inquiry has been submitted.");
  };

  return (
    <section className="contact-page">

      <div className="contact-info">
        <p className="section-label">CONTACT</p>

        <h1>
          Let's create
          <br />
          something impactful.
        </h1>

        <p>
          Looking for a keynote speaker, workshop facilitator, or leadership
          trainer? Get in touch and let's discuss your event.
        </p>

        <div className="contact-details">
          <p>
            <strong>Email</strong>
            <br />
            hello@alexspeaks.com
          </p>

          <p>
            <strong>Phone</strong>
            <br />
            +91 98765 43210
          </p>

          <p>
            <strong>Location</strong>
            <br />
            Bangalore, India
          </p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          required
        />

        <label>Organization</label>
        <input
          type="text"
          placeholder="Company / Organization"
        />

        <label>Event Type</label>

        <select>
          <option>Keynote Speaking</option>
          <option>Corporate Training</option>
          <option>Workshop</option>
          <option>Conference</option>
          <option>Other</option>
        </select>

        <label>Message</label>

        <textarea
          rows="6"
          placeholder="Tell me about your event..."
          required
        ></textarea>

        <button type="submit" className="primary-button">
          Send Inquiry
        </button>

      </form>
    </section>
  );
}

export default Contact;
