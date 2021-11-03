import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="education card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="name">📕 {item.name}</h3>
              <p>{item.specialty}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;