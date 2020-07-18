import React, { FunctionComponent } from 'react';

import laptop from '../../images/laptop.png';
const Text2020: FunctionComponent = () => (
  <div
    className="card mb-3 textComponent"
    style={{ backgroundColor: 'rgba(77, 118, 132, 0.74)', padding: '1rem' }}
  >
    <div className="row no-gutters">
      <div className="col-md-4 imageArea">
        <img src={laptop} className="card-img" alt="Kitten" />
        <small
          className="smalltext"
          style={{ color: 'rgb(217, 245, 246) !important' }}
        ></small>
      </div>
      <div className="col-md-8 textarea">
        <div className="card-body">
          <h3 className="card-title" style={{ paddingTop: '2rem' }}>
            Frontend Web Developer
          </h3>
          <section className="text-content">
            <hr className="upperHr" />
            <p className="card-text">
              Completing the course I graduated in 2020 and I came to realize in
              was one of the best decision of my life. My thirst for learning
              new technologies and enthousiasm for the profession only became
              stonger. Through this experience I learned not only new things
              about programming but also a lot about my self that allowed me to
              improve myself professionally as well as at a personal level.
            </p>
            <hr className="lowerHr" />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Text2020;
