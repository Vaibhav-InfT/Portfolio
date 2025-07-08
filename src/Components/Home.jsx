import React from 'react';
import profileImg from '../Assets/profile.jpg';

const Home = () => (
    <section className="home" id="home">
        <header>
            <nav className="navbar">
                <div className="logo">Portfolio</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section className="showcase">
            <div className="show-content">
                <div className="text">
                    <h1>
                        Hi, I'm <span>Vaibhav</span>
                    </h1>
                    <p>
                        Full Stack Developer passionate about creating innovative web
                        solutions
                    </p>
                    <div className="buttons">
                        <a href="#projects" className="btn yellow">View My Work</a>
                        <a href="#contact" className="btn white">Get In Touch</a>
                    </div>
                </div>
                <img src={profileImg} alt="Vaibhav" className="profile-img" />
            </div>
        </section>
    </section>
);

export default Home;
