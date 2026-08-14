function Testimonials() {
    const testimonials = [
        {
            quote:
            "Alex completely trandformed the energy of our event. The audience was engaged from beginning to end.",
            name: "Pavan",
            role: "HR Director"
        },
        {
            quote:
            "One of the most practial and inspiring sessions our leadership team has experienced.",
            name: "Swathy",
            role: "Team Advisor"
        },
        {
            quote:
            "The stories, ideas, and actionable strategies made this an unforgettable experience.",
            name: "Chaithanya",
            role: "Organizer"
        }
    ];

    return (
        <section className="page-section">
            <div className="page-header">
                <p className="section-label">TESTIMONIALS</p>

                <h1>What people are saying.</h1>

                <p>
                    Real experiences from organizations, leaders, and audiences.
                </p>
            </div>

            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="stars">★★★★★</div>

                            <p className="quote">
                             "{testimonial.quote}"
                            </p>

                            <h3>{testimonial.name}</h3>

                            <span>{testimonial.role}</span>
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default Testimonials;