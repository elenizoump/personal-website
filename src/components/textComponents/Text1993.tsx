import React, { FunctionComponent } from 'react';

import whiteTower from '../../images/whiteTower.png';

const Text1993: FunctionComponent = () => (
  <div
    className="card mb-3 textComponent"
    style={{ backgroundColor: 'rgba(77, 118, 132, 0.74)', padding: '1rem' }}
  >
    <div className="row no-gutters">
      <div className="col-md-4 imageArea">
        <img
          src={whiteTower}
          className="card-img"
          alt="..."

          // style={{ borderRadius: '80%' }}
        />
        <small
          className="smalltext"
          style={{ color: 'rgb(217, 245, 246) !important' }}
        >
          White Tower of Thessaloniki
        </small>
      </div>
      <div className="col-md-8 textarea">
        <div className="card-body">
          <h3 className="card-title">
            Experimental School of Aristotle University of Thessaloniki
          </h3>
          <section className="text-content">
            <hr className="upperHr" />
            <p className="card-text">
              I was born in Thessaloniki in 1993 and spent a great part of my
              childhood in the sunny, coastal city. There, I attended the
              'Experimental School of Aristotle University of Thessaloniki'.
              During my school years, I discovered my passion for life-sciences
              and embarked on a life-long journey with music which begun by
              getting accepted in the State Conservatory and started violoncello
              lessons.
              {/* //to graduate with high-school diploma in 2011 */}
            </p>
            <hr className="lowerHr" />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Text1993;
