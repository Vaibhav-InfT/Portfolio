import React from 'react';

const About = () => (
    <section className="about-section" id="about">
        <div className="about-gradient"></div>
        <div className="about-content">
            <h2>About Me</h2>
            <p>
                I'm a passionate full-stack developer with 3+ years of experience creating web applications that
                solve real-world problems. I love working with modern technologies and am always eager to learn new
                things.
            </p>

            <div className="features-container">
                <div className="feature-card">
                    <h3>Clean Code</h3>
                    <p>Writing maintainable, scalable code that follows best practices</p>
                </div>
                <div className="feature-card">
                    <h3>Responsive Design</h3>
                    <p>Creating beautiful, mobile-first designs that work on all devices</p>
                </div>
                <div className="feature-card">
                    <h3>Performance</h3>
                    <p>Optimizing applications for speed and best user experience</p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
