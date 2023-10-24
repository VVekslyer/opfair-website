import React from 'react';
import Slide from 'react-reveal';

export default function OpFairAttendees(props) {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (!props.data) return null;

  const skillmessage = props.data.skillmessage;

  const education = props.data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });

  const work = props.data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  const skills = props.data.skills.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = 'bar-expand ' + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <h1 className="attendees-title">OpFair 2024 Attendees</h1>
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h2>
              <span>Gold</span>
            </h2>
          </div>

          {/* <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div> */}
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h2>
              <span>Silver</span>
            </h2>
          </div>

          {/* <div className="nine columns main-col">{work}</div> */}
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h2>
              <span>Exhibitor</span>
            </h2>
          </div>

          {/* <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div> */}
        </div>
      </Slide>
    </section>
  );
}
