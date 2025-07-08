import React from 'react';

const Skills = () => (
    <section id="skills" className="skills">
        <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-content">
                <div className="skills-column">
                    <div className="skill">
                        <span>JavaScript</span>
                        <div className="progress-bar">
                            <div style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Node.js</span>
                        <div className="progress-bar">
                            <div style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>MongoDB</span><span>70%</span>
                        <div className="progress-bar">
                            <div style={{ width: '70%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="skills-column">
                    <div className="skill">
                        <span>React</span>
                        <div className="progress-bar">
                            <div style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Python</span>
                        <div className="progress-bar">
                            <div style={{ width: '75%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>AWS</span>
                        <div className="progress-bar">
                            <div style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
