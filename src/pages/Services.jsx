function Services() {
    const services = [
        {
            number: "01",
            title: "Keynote Speaking",
            description:
             "Powerful and engaging keynote sessions designed to inspire audiences and create action."
        },
        {
            number: "02",
            title: "Corporate Training",
            description:
             "Interactive training programs designed to improv leadership, communication, and performance."
        },
        {
            number: "03",
            title: "Leadership Workshops",
            description:
             "Practical workshops that help emerging and experienced leaders develop stronger skills."
        },
        {
            number: "04",
            title: "Motivational Sessions",
            description:
             "High-energy sessions designed to build confidence, resilience, and a growth mindset."
        }
    ];

    return (
        <section className="page-section">
            <div className="page-header">
                <p className="section-label">SERVICES</p>
                
                <h1>Speaking experiences that make an impact.</h1>

                <p>
                    Customized programs designed for organizations, conferences,
                    universities, and leadership teams,
                </p>
            </div>

            <div className="service-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.number}>
                        <span>{service.number}</span>

                        <h2>{service.title}</h2>

                        <p>{service.description}</p>

                        <a href="/contact">Learn More ➤</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;