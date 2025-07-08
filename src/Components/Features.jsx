import React from 'react';
import project1 from '../Assets/project1.png';
import project2 from '../Assets/project2.png';
import project3 from '../Assets/project3.png';

const Features = () => (
    <section className="projects-section" id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-container">

            <div className="project-card">
                <img src={project1} alt="E-Commerce Platform" />
                <h3>E-Commerce Platform</h3>
                <p>Full-stack web application built with React, Node.js, and MongoDB</p>
                <div className="tech-tags">
                    <span>React</span><span>Node.js</span><span>MongoDB</span><span>Express</span>
                </div>
                <div className="project-links">
                    <a href="#" className="btn code-btn">Code</a>
                    <a href="#" className="btn demo-btn">Demo</a>
                </div>
            </div>

            <div className="project-card">
                <img src={project2} alt="Task Management App" />
                <h3>Task Management App</h3>
                <p>Responsive mobile-first application with real-time updates</p>
                <div className="tech-tags">
                    <span>React Native</span><span>Firebase</span><span>Redux</span>
                </div>
                <div className="project-links">
                    <a href="#" className="btn code-btn">Code</a>
                    <a href="#" className="btn demo-btn">Demo</a>
                </div>
            </div>

            <div className="project-card">
                <img src={project3} alt="Data Visualization Dashboard" />
                <h3>Data Visualization Dashboard</h3>
                <p>Interactive dashboard for business analytics and reporting</p>
                <div className="tech-tags">
                    <span>D3.js</span><span>Python</span><span>Flask</span><span>PostgreSQL</span>
                </div>
                <div className="project-links">
                    <a href="#" className="btn code-btn">Code</a>
                    <a href="#" className="btn demo-btn">Demo</a>
                </div>
            </div>

        </div>
    </section>
);

export default Features;
