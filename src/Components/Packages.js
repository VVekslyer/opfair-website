import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';

export default function Packages(props) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Simulate a delay of 2 seconds (you can adjust this as needed)
    const delay = setTimeout(() => {
      setShowComponent(true);
    }, 500);

    return () => {
      clearTimeout(delay); // Clear the timeout if the component unmounts
    };
  }, []);

  const data = [
    ["", "Startup*", "Exhibitor", "Silver", "Gold"],
    ["Prices†", "CA$550.00", "CA$1,050.00", "CA$1,550.00", "CA$1,950.00"],
    ["Early bird prices‡", "CA$475.00", "CA$1,050.00", "CA$1,500.00", "CA$1,800.00"],
    ["Standard Table", "✓", "✓", " ", " "],
    ["Premium Table", " ", " ", "✓", "✓"],
    ["Choice of booth location", " ", " ", "✓", "✓"],
    ["Free Wi-Fi & Parking", "✓", "✓", "✓", "✓"],
    ["Complimentary Breakfast and Lunch", "✓", "✓", "✓", "✓"],
    ["myExperience job posting for one month", "✓", "✓", "✓", "✓"],
    ["Days of attendance at OpFair", "1", "1", "2", "2"],
    ["Provided TV at Booth (HDMI Connection)", " ", " ", " ", "✓"],
    ["Logo displayed on OpFair & ESSS website", "Standard", "Standard", "Enlarged", "Enlarged"],
    ["Networking with SFU engineering students", "✓", "✓", "✓", "✓"],
    ["Standard social media story: Company name & logo advertised on OpFair’s various platforms", "✓", "✓", "✓", "✓"],
    ["Premium social media story & Newsletter Write-up with company description and information", " ", " ", "✓", "✓"],
    ["Posters: Companies displayed on posters throughout engineering buildings and labs", "Template", "Template", "Custom", "Custom"],
    ["Advertisement: Information paper pamphlets provided to OpFair attendees and at booths", "✓", "✓", "✓", "✓"],
    ["Conference: Companies host approved session during OpFair with Faculty of Applied Science", " ", " ", "No time choice", "May choose time"],
    ["Industry Mixer: companies invited to socialize with top engineering students", "Limited seats", "Limited seats", "Limited seats", "Given priority"],
    ["Scheduled in-person & online sessions after OpFair", "", "", "", "✓"]
  ];

  const headerStyles = [
    {},
    {},
    {backgroundColor: '#203A6C', color: '#fff'},
    {background: 'linear-gradient(to right, #5de0e6, #006dff)', color: '#fff'},
    {background: 'linear-gradient(to right, #ffde59, #ffb434, #f6a61f)', color: '#fff'}
  ];

  return (
    <section id="packages">
      { showComponent ? <> <h1>Packages</h1>
      <Slide left duration={1000}>
      <table cellSpacing={20}>
        <thead>
          <tr>
            {data[0].map((item, index) => (
              <th style={headerStyles[index]} key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> 
      </Slide> </> : <></>}
    </section>
  );
}
