import React from 'react';
import Fade from 'react-reveal';

function Footer(props) {
  if (!props.data) return null;

  const networks = props.data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2023-2024 OpFair</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

