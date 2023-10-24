import React from 'react';
import { Zoom } from 'react-reveal';
import Typing from 'react-typing-animation';

export default function Header(props) {
  if (!props.data) return null;

  const name = props.data.name;
  const description = props.data.description;

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>
        {/* Make this svg much smaller and less disruptive to the rest of the nav bar contents,
        <img src="images/opfair-logo-with-text.svg" style={{ position: 'absolute', height: '10px', width: '10px'}}/>
        */}
        
        <img src="images/opfair-logo.svg" style={{ position: 'absolute', height: '55px', width: '55px', top: '8px', left: '20px'}}/>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              2024 Attendees
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#packages">
              Packages Info
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          {/* <Fade bottom> */}
          <Typing>
            <h1>{name}</h1>
          </Typing>
          {/* </Fade> */}
          {/* <Fade bottom duration={1200}> */}
          <Typing speed={0} startDelay={3000}>
            <h3>{description}.</h3>
          </Typing>
          {/* </Fade> */}
          <Zoom delay={5000}>
            <img className="opfair-img" src="images/opfair.png" style={{ position: 'absolute', right: '15px', bottom: '250px', width: '1000px'}} />
          </Zoom>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}
