import React from 'react';
import "./App.css";
import Hero from './components/Hero';
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from './components/About';
import { useState } from 'react';

import { Cv } from "./Cv/Cv";

const { hero, education, experience, about} = Cv;

function App() {
  const [showEducation, setShowEducation] = useState(true)
  return (
    <div className="App">
      <Hero hero={hero} />

      <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        <About about={about} />
      </div>
    </div>
  );
}

export default App;

