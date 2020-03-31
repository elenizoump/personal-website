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
              My interest in life-sciences and love for animals led me to the
              desicion to pursue a career in Animal Health and therefore after
              graduating and getting my high-school diploma in 2011, I moved to
              Scotland and started my Bachelor at Edinburgh Napier University.
            </p>
            <hr className="lowerHr" />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Text2020;
