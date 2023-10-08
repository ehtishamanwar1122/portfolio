import React from 'react';
import Snowfall from 'react-snowfall'; // Assuming you have the react-snowfall library installed
import './Hero.css';

function InteractiveHero() {
  return (
    
   <div className="container">
    <Snowfall snowflakeCount={750} />
     <div className="interactive-hero">
      
      <h1>Ehtisham Anwar</h1>
      <h4>Web Developer</h4>
    </div>
   </div>
  );
}

export default InteractiveHero;
