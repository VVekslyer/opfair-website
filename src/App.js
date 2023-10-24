import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import OpFairAttendees from './Components/OpFairAttendees';

export default function App() {
  const [data, setData] = useState({});

  ReactGA.initialize("UA-110570651-1");
  ReactGA.pageview(window.location.pathname);

  const getData = () => {
    fetch("./data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header data={data.main} />
      <About data={data.main} />
      <OpFairAttendees data={data.resume} />
      <Gallery data={data.gallery} />
      <Contact data={data.main} />
      <Footer data={data.main} />
    </div>
  );
}

