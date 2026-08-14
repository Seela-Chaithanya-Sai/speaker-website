import { useState } from "react";
import "./BookMe.css";

function BookMe() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="book-page">

      {/* Hero Section */}
      <section className="book-hero">
        <div className="book-hero-content">
          <p className="book-label">BOOK A SPEAKER</p>

          <h1>
            Let's make your
            <br />
            event <span>unforgettable.</span>
          </h1>

          <p className="book-description">
            Bring powerful ideas, inspiring stories, and meaningful
            conversations to your next event.
          </p>

          <div className="book-highlights">
            <div>
              <strong>01</strong>
              <p>Keynote Speaking</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Corporate Events</p>
            </div>

            <div>
              <strong>03</strong>
              <p>Leadership Workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">

        <div className="booking-info">
          <p className="book-label">LET'S CONNECT</p>

          <h2>
            Tell me about
            <br />
            your event.
          </h2>

          <p>
            Fill out the form and share a few details about your event.
            I'll get back to you as soon as possible.
          </p>

          <div className="booking-contact">
            <div>
              <span>Email</span>
              <p>hello@alexspeaks.com</p>
            </div>

            <div>
              <span>Phone</span>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <span>Based In</span>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Organization</label>
              <input
                type="text"
                placeholder="Company / Organization"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Event Type *</label>

            <select required defaultValue="">
              <option value="" disabled>
                Select event type
              </option>
              <option>Keynote Speaking</option>
              <option>Corporate Event</option>
              <option>Leadership Workshop</option>
              <option>Motivational Session</option>
              <option>College / University Event</option>
              <option>Conference</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Event Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Expected Audience</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select audience size
                </option>
                <option>Under 50</option>
                <option>50 - 100</option>
                <option>100 - 500</option>
                <option>500 - 1000</option>
                <option>1000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tell me about your event *</label>

            <textarea
              rows="6"
              placeholder="Tell me about your event, audience, location and what you are looking for..."
              required
            ></textarea>
          </div>

          <button type="submit" className="book-submit">
            Send Booking Request →
          </button>

          {submitted && (
            <div className="success-message">
              Thank you! Your booking request has been received.
            </div>
          )}

        </form>

      </section>

      {/* Bottom CTA */}
      <section className="book-cta">
        <p className="book-label">READY TO GET STARTED?</p>

        <h2>Let's create an experience people remember.</h2>

        <p>
          Every great event starts with a conversation.
        </p>
      </section>

    </div>
  );
}

export default BookMe;
