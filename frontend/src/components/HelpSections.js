// src/components/HelpSections.js
import React from 'react';
import "../components/HelpSections.css"

function HelpSections(props) {

  return (
    
      
        <div className="sectionCard">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      
      );
}

export default HelpSections;
