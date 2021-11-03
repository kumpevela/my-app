import React from 'react'
import "./Hero.css";

const hero = ({ hero }) => {
    return (
      <div className="hero">
      <img src={hero.image} alt="" />
        <div className="card">
        <h2>
          <p>{hero.name}</p> 
          <p>{hero.surname}</p> 
          <p>{hero.alias}</p>
        </h2>
          <p>🗓️{hero.birthDate}</p>
          <p>
            📧
            <a href={"mailto:" + hero.email}>
            kumpevela@gmail.com
            </a>
          </p>
          <p>📱 {hero.phone}</p>
          <p>💾<a href={hero.gitHub}>
              GitHub
            </a></p>
        </div>
      </div>
    );
  };

export default hero
