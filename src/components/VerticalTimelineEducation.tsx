import React, { FunctionComponent } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import whiteTower from '../images/whiteTower.png';
import laptop from '../images/laptop.png';
import ironhack from '../images/ironhack.png';
import edinburgh from '../images/edinburgh.png';
import 'react-vertical-timeline-component/style.min.css';

const WhiteTowerPic: FunctionComponent = () => (
  <img
    className="textImage"
    src={whiteTower}
    alt="The White Tower of Thessaloniki"
  />
);
const Laptop: FunctionComponent = () => (
  <img
    className="textImage"
    src={laptop}
    width="200px"
    height="255px"
    border-radius="20px"
    alt="Laptop"
  />
);
const Ironhack: FunctionComponent = () => (
  <img
    className="textImage"
    src={ironhack}
    width="200px"
    height="255px"
    border-radius="20px"
    alt="Ironhack Web Development School"
  />
);
const Edinburgh: FunctionComponent = () => (
  <img
    className="textImage"
    src={edinburgh}
    width="200px"
    height="255px"
    border-radius="20px"
    alt="Edinburgh Castle"
  />
);

const VerticalTimelineEducation: FunctionComponent = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#3a5964',
        color: '#fff',
        width: '65%',
        marginLeft: '-30%',
        transitionDelay: '0.5s',
      }}
      contentArrowStyle={{
        top: '99px',
        borderRight: '7px solid  #3a5964',
      }}
      date="1993"
      dateClassName={'dateright'}
      iconStyle={{
        background: 'rgb(104, 206, 210)',
        color: '#fff',
        height: '220px',
        width: '210px',
        marginLeft: '-105px',
        borderRadius: '50%',
        boxShadow: 'none',
        border: '4px solid white',
        overflow: 'hidden',
      }}
      icon={<WhiteTowerPic />}
    >
      <h3 className="vertical-timeline-element-title">
        Experimental School of Aristotle University of Thessaloniki
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Thessaloniki, Greece
      </h4>
      <div className="timelineEvents">
        <p>
          I was born in Thessaloniki in 1993 and spent a great part of my
          childhood in the sunny, coastal city. There, I attended the
          'Experimental School of Aristotle University of Thessaloniki'
          graduating with my high-school diploma in 2011.
        </p>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#3a5964',
        color: '#fff',
        width: '65%',
        marginRight: '-30%',
        transitionDelay: '0.8s',
      }}
      contentArrowStyle={{
        top: '99px',
        borderRight: '7px solid  #3a5964',
      }}
      date="2011"
      iconStyle={{
        background: 'rgb(104, 206, 210)',
        color: '#fff',
        height: '220px',
        width: '210px',
        marginLeft: '-105px',
        borderRadius: '50%',
        boxShadow: 'none',
        border: '4px solid white',
        overflow: 'hidden',
      }}
      icon={<Edinburgh />}
    >
      <h3 className="vertical-timeline-element-title">
        Edinburgh Napier University
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Edinburgh, Scotland
      </h4>
      <div className="timelineEvents">
        <p>
          My interest and curiosity in life-sciences and love for animals led me
          to pursue a career in Animal Health. After highschool I moved to
          Scotland and started my Bachelor at Edinburgh Napier University.
          Following graduation, I started my professional carrer in various
          Small Animal Veterinary Clinics throughout Scotland until my decision
          to relocate in Zürich in 2018.
        </p>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#3a5964',
        color: '#fff',
        width: '65%',
        marginLeft: '-30%',
        transitionDelay: '1s',
      }}
      contentArrowStyle={{
        top: '99px',
        borderRight: '7px solid  #3a5964',
      }}
      date="2019"
      dateClassName={'dateright'}
      iconStyle={{
        background: 'rgb(104, 206, 210)',
        color: '#fff',
        height: '220px',
        width: '210px',
        marginLeft: '-105px',
        borderRadius: '50%',
        boxShadow: 'none',
        border: '4px solid white',
        overflow: 'hidden',
      }}
      icon={<Ironhack />}
    >
      <h3 className="vertical-timeline-element-title">
        {' '}
        Ironhack Web Development School
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Lisboa, Portugal</h4>
      <div className="timelineEvents">
        <p>
          {' '}
          During my stay in Scotland, I was slowly introduced to Web Development
          which unknowlingly would turn into a life-long dream of mine. After my
          relocation in Switzerland my love for Web Development became apparent
          and in 2019 I finally took a leap of faith towards turning my dream
          into reality. I researched ways of entering into the professional Web
          development world which led me to join the full-stack Web Development
          programm at Ironhack School of Web Development.
        </p>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#3a5964',
        color: '#fff',
        width: ' 65%',
        marginRight: '-30%',
        transitionDelay: '0.5s',
      }}
      contentArrowStyle={{
        top: '99px',
        borderRight: '7px solid  #3a5964',
      }}
      date="2020-present"
      iconStyle={{
        background: 'rgb(104, 206, 210)',
        color: '#fff',
        height: '220px',
        width: '210px',
        marginLeft: '-105px',
        borderRadius: '50%',
        boxShadow: 'none',
        border: '4px solid white',
        overflow: 'hidden',
      }}
      icon={<Laptop />}
    >
      <h3 className="vertical-timeline-element-title">
        {' '}
        Frontend Web Developer
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Zürich, Switzerland
      </h4>
      <div className="timelineEvents">
        <p>
          Completing the course I graduated in 2020 and I came to realize it was
          one of the best decision of my life. My thirst for learning new
          technologies and enthousiasm for the profession only became stonger.
          Through this experience I learned not only new things about
          programming but also a lot about my self that allowed me to improve
          myself professionally as well as at a personal level.
        </p>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default VerticalTimelineEducation;
