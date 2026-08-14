import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home">

            <section className="hero">
                <div className="hero-content">
                    <p className="subtitle">KEYNOTE SPEAKER ● MENTOR ● LEADER</p>
                    
                    <h1>
                        Inspire.
                        <br />
                        Lead.
                        <br />
                        Transform.
                    </h1>

                    <p className="hero-text">
                        Helping individuals and organizations unlock their potential,
                        build confidence, and create meaningful impact.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/contact" className="primary-button">
                          Book Me to Speak
                        </Link>

                        <Link to="/events" className="secondary-button">
                          View Events
                        </Link>
                    </div>
                </div>

                <div className="hero-image">
                    <img
                     src="/speaker.png"
                     alt="Professional Speaker"
                     className="speaker-photo"
                    />
                </div>
            </section>

            <section className="about section">
                <div>
                    <p className="section-label">ABOUT THE SPEAKER</p>

                    <h2>
                        Turning ideas into
                        <br />
                        meaningful action.
                    </h2>
                </div>

                <div>
                    <p>
                        Alex is a professional keynote speaker passionate about
                        leadership, personal development, motivation, and
                        organizational growth.
                    </p>

                    <p>
                        Through powerful stories and practical strategies, Alex helps
                        audiences challenge their limits and take meaningful action.
                    </p>

                    <Link to="/services" className="text-link">
                     Explore Speaking Services ➤
                    </Link>
                </div>
            </section>

            <section className="stats">
                <div>
                    <h2>10K+</h2>
                    <p>People Inspired</p>
                </div>

                <div>
                    <h2>100+</h2>
                    <p>Events</p>
                </div>

                <div>
                    <h2>50+</h2>
                    <p>Organizations</p>
                </div>

                <div>
                    <h2>15+</h2>
                    <p>Countries</p>
                </div>
            </section>

            <section className="topics section">
                <p className="section-label">SPEAKING TOPICS</p>

                <h2>Ideas that create impact.</h2>

                <div className="topic-grid">
                    <div className="topic-card">
                        <span>01</span>
                        <h3>Leadership</h3>
                        <p>
                            Developing confident and effective leaders.
                        </p>
                    </div>

                    <div className="topic-card">
                        <span>02</span>
                        <h3>Motivation</h3>
                        <p>
                            Bulding the mindset required to achieve ambitious goals.
                        </p>
                    </div>

                    <div className="topic-card">
                        <span>03</span>
                        <h3>Personal Growth</h3>
                        <p>
                            Helping people discover their potential and purpose.
                        </p>
                    </div>

                    <div className="topic-card">
                        <span>04</span>
                        <h3>Team Building</h3>
                        <p>
                            Creating stronger and more collaborative teams.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <p className="section-label">LET'S WORK TOGETHER</p>

                <h2>Ready to inspire your audience?</h2>

                <p>
                     Bring an unforgettable speaking experience to your next event.
                </p>

                <Link to="/contact" className="primary-button">
                 Book a Speaking Session
                </Link>
            </section>
        </div>
    );
}

export default Home;