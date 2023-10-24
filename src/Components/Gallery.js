import React, { useState, useEffect } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-reveal';

export default function Gallery(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (props.data) {
      setTimeout(() => setIsLoaded(true), 2000); // delay loading
    }
  }, [props.data]);

  if (!isLoaded) return <div>Loading...</div>;

  const images = props.data.opfair2019.map(function (img) {
    let image = 'images/gallery/' + img.src;

    return (
      <div key={img.id} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage src={image} />
          <div style={{ textAlign: 'center' }}>{img.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="gallery">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 className="year">2019</h1>

            <div id="gallery-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {images}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}