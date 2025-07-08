import React from 'react';

const Contact = () => (
    <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's work together to bring your ideas to life!</p>

        <div className="contact-details">
            <div>
                <strong>Email</strong><br />
                official.conx@email.com
            </div>
            <div>
                <strong>Phone</strong><br />
                +1 (555) 123-4567
            </div>
            <div>
                <strong>Location</strong><br />
                New York, NY
            </div>
        </div>

        <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
        </div>

        <footer>
            <p>&copy; 2025 Vaibhav. All rights reserved.</p>
        </footer>
    </section>
);

export default Contact;
