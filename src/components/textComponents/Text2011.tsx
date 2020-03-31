import React, { FunctionComponent } from 'react';

import edinburgh from '../../images/edinburgh.png';

const Text2015: FunctionComponent = () => (
  <div
    className="card mb-3 textComponent"
    style={{ backgroundColor: 'rgba(77, 118, 132, 0.74)', padding: '1rem' }}
  >
    <div className="row no-gutters">
      <div className="col-md-4 imageArea">
        <img src={edinburgh} className="card-img" alt="Edinburgh Castle" />
        <small
          className="smalltext"
          style={{ color: 'rgb(217, 245, 246) !important' }}
        >
          Edinburgh Castle
        </small>
      </div>
      <div className="col-md-8 textarea">
        <div className="card-body">
          <h3 className="card-title" style={{ paddingTop: '2rem' }}>
            Edinburgh Napier University
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

export default Text2015;
