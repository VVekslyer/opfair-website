import React from "react";
import Fade from "react-reveal";

export default function About(props) {
  if (!props.data) return null;

  const about1 = props.data.about1;
  const about2 = props.data.about2;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/opfair-logo-with-text.svg"
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About OpFair 2024</h2>
            <p>{about1}</p>
            <p>{about2}</p>
            <div className="row">
              <div className="columns contact-details">
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

