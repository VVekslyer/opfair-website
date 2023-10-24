import React, { useState, useEffect } from 'react';
import { Fade } from 'react-reveal';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

export default function Gallery(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (props.data) setTimeout(() => setIsLoaded(true), 3000); // delay loading
  }, [props.data]);

  if (!isLoaded) return <div>Loading...</div>;

  const items = props.data.opfair2019.map(function (img) {
    let image = './images/gallery/' + img.src;

    return {
      itemId: 'sample-id',
      mediaUrl: image,
      metaData: {
        title: img.title,
        type: 'image'
      }
    };
  });

  const options = {
    galleryLayout: -1,
    itemClick: 'fullscreen'
    // Add more options here according to your preference.
    // You can find more options at https://github.com/wix-incubator/pro-gallery/blob/master/packages/gallery/src/settings/options.js
  };

  // The size of the gallery container. The images will fit themselves in it
	const container = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	// const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;

  return (
    <section id="gallery">
      {/* <Fade left duration={1000} distance="40px"> */}
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 className="year">2019</h1>
            <div id="gallery-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <ProGallery 
                items={items} 
                options={options} 
                container={container}
			          // eventsListener={eventsListener}
			          scrollingElement={scrollingElement}
              />
            </div>
          </div>
        </div>
      {/* </Fade> */}
    </section>
  );
}
