import React from 'react';
import { Slide } from 'react-reveal';

export default function Packages() {
  const data = [
    ['', 'Startup*', 'Exhibitor', 'Silver', 'Gold'],
    ['Prices†', 'CA$550.00', 'CA$1,050.00', 'CA$1,550.00', 'CA$1,950.00'],
    ['Early bird prices‡', 'CA$475.00', 'CA$1,050.00', 'CA$1,500.00', 'CA$1,800.00'],
    ['Standard Table', '✓', '✓', ' ', ' '],
    ['Premium Table', ' ', ' ', '✓', '✓'],
    ['Choice of booth location', ' ', ' ', '✓', '✓'],
    ['Free Wi-Fi & Parking', '✓', '✓', '✓', '✓'],
    ['Complimentary Breakfast and Lunch', '✓', '✓', '✓', '✓'],
    ['myExperience job posting for one month', '✓', '✓', '✓', '✓'],
    ['Days of attendance at OpFair', '1', '1', '2', '2'],
    ['Provided TV at Booth (HDMI Connection)', ' ', ' ', ' ', '✓'],
    ['Logo displayed on OpFair & ESSS website', 'Standard', 'Standard', 'Enlarged', 'Enlarged'],
    ['Networking with SFU engineering students', '✓', '✓', '✓', '✓'],
    ['Standard social media story: Company name & logo advertised on OpFair’s various platforms', '✓', '✓', '✓', '✓'],
    ['Premium social media story & Newsletter Write-up with company description and information', ' ', ' ', '✓', '✓'],
    ['Posters: Companies displayed on posters throughout engineering buildings and labs before OpFair', 'Template', 'Template', 'Custom', 'Custom'],
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
      <h1>Packages</h1>
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
      </Slide>
    </section>
  );
}