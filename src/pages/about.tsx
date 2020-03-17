import React, { FunctionComponent } from 'react';
import MainLayout from '../layouts/Main';
// import AboutBackgroundProfilePic from '../images/aboutBackgroundProfilePic.png';

const AboutPage: FunctionComponent = () => (
  <MainLayout>
    <div className="pictureContainer">
      <section className="nameContainer">
        <h1>I am Eleni.</h1>
        <h4>
          FULL STACK <br />
          WEB DEVELOPER
        </h4>
      </section>
    </div>
    <div className="aboutContainer">
      <div className="aboutContainerContentWrapper">
        <h1 className="personalProfile">Personal Profile</h1>
        <div className="profileTextWrapper">
          <div className="profileText">
            <div>
              <h4>About:</h4>
              <p>
                I am a driven, highly motivated, multilingual Full Stack Web
                Developer with focus on Frontend engineering. Having recently
                completed a three-month intensive Web Development Bootcamp I am
                very enthousiastic to embark on my new career as a Web
                Developer. I have great knowledge of the latest technologies
                used both in frontend and back end development.
              </p>
            </div>
            <div>
              <h4>Why Web Development?</h4>
              <p>
                My curiosity about how the web works introduced me to the world
                of web development. This led me to discover a plethora of web
                technologies that can be combined to create innovative products
                and address existing business problems. I was very excited about
                the potential of learning and mastering these technologies, and
                thus I decided to pursue a full-time carreer in web development.
              </p>
            </div>
            <div>
              <h4>What I am looking for:</h4>
              <p>
                I enjoy being part of highly motivated and ever-learning teams
                that work towards offering solutions that deliver high value to
                their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default AboutPage;
