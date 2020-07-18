import React, { FunctionComponent } from 'react';

import ironhack from '../../images/ironhack.png';
const Text2019: FunctionComponent = () => (
  <div
    className="card mb-3 textComponent"
    style={{ backgroundColor: 'rgba(77, 118, 132, 0.74)', padding: '1rem' }}
  >
    <div className="row no-gutters">
      <div className="col-md-4 imageArea">
        <img src={ironhack} className="card-img" alt="Kitten" />
        <small
          className="smalltext"
          style={{ color: 'rgb(217, 245, 246) !important' }}
        ></small>
      </div>
      <div className="col-md-8 textarea">
        <div className="card-body">
          <h3 className="card-title" style={{ paddingTop: '2rem' }}>
            Ironhack Web Development School
          </h3>
          <section className="text-content">
            <hr className="upperHr" />
            <p className="card-text">
              During my stay in Scotland, I was slowly introduced to Web
              Development which unknowlingly would turn into a life-long dream
              of mine. After my relocation in Switzerland my love for Web
              Development became apparent and in 2019 I finally took a leap of
              faith towards turning my dream into reality. I researched ways of
              entering into the professional Web development world which led me
              to join the full-stack Web Development programm at Ironhack School
              of Web Development.
            </p>
            <hr className="lowerHr" />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Text2019;
