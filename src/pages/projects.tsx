import React, { FunctionComponent } from 'react';
import MainLayout from '../layouts/Main';

const ProjectsPage: FunctionComponent = () => (
  <MainLayout>
    <div className="projectsContainer">
      <div className="projectsContainerContentWrapper">
        <h1 className="projectsTitle">Projects</h1>
        <div className="projectsWrapper">
          <div className="projects">
            <div className="card mb-3">
              <iframe
                src="https://www.youtube.com/embed/oqiIjcGkQqo?loop=1"
                style={{ margin: '0 auto' }}
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Hercules: Challenge of the Stymphalian Birds{' '}
                </h3>
                <p className="card-text">
                  An online game inspired from the ancient Greek Mythology,
                  featuring the demigod Hercules in one of his challenges
                  against the man-eating Stymphalian Birds.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    “Help Hercules collect the Lightning Bolts of Zeus, lost in
                    the Stymphalian Valley. But beware of the birds...!„
                  </small>
                </p>
                <a
                  className="link--external"
                  href="https://challengeofhercules.netlify.com"
                >
                  Play Game
                </a>
              </div>
            </div>
            <div className="card mb-3">
              <iframe
                src="https://www.youtube.com/embed/Io0bFy0Pl9A?loop=1"
                style={{ margin: '0 auto' }}
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Two Days Away: for Getaway lovers with busy lives{' '}
                </h3>
                <p className="card-text">
                  Two Days Away is a web app that generates a detailed itinerary
                  for random travel destinations suitable for a quick weekend
                  getaway. The list of activities for each destination is
                  carefully curated by hand, in order to help users make the
                  best of their short visit, while engaging in balanced
                  activities.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    “Just pack your bags and get that plane ticket. Adventure
                    Awaits!„
                  </small>
                </p>
                <a
                  className="link--external"
                  href="https://twodaysaway.herokuapp.com"
                >
                  Go to App
                </a>
              </div>
            </div>
            <div className="card mb-3">
              {/* <iframe
                
                src="https://www.youtube.com/embed/oqiIjcGkQqo?loop=1"
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              /> */}
              <div className="card-body">
                <h3 className="card-title">
                  Jungle City: Making cities and human settlements inclusive,
                  safe, resilient and sustainable{' '}
                </h3>
                <p className="card-text">
                  Created in collaboration with students of the Data and UX/UI
                  Ironhack bootcamps, this project is a web platform that aims
                  to aid the local government in reaching Goal Nr. 11 of “The
                  Global Goals” (www.globalgoals.org): Making cities and human
                  settlements inclusive, safe, resilient and sustainable. The
                  platform features a calculator allowing goverment officials
                  and architects to upload the total surface area of their
                  building projects and calculate how much vertical greenery
                  they can accomodate to help the city offset its CO2 emmissions
                  by 5%.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    “How might we help the government plan and track greener
                    cities in Portugal?„
                  </small>
                </p>
                <a className="link--external" href="">
                  Go to App
                </a>
              </div>
            </div>
            <div className="card mb-3">
              <iframe
                src="https://www.youtube.com/embed/kuyt70plSVI"
                style={{ margin: '0 auto' }}
                // @ts-ignore
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Claveefy: bringing together true lovers of music{' '}
                </h3>
                <p className="card-text">
                  Both people that wish to learn a new instrument and people
                  looking for teaching opportunities can use the platform to
                  book music lessons. Prospect students can search for teachers
                  of their desired instrument and utilize additional filters by
                  skill level, city etc. Having chosen a particular teacher
                  students have the ability to view teachers’ profiles and the
                  available dates and request to book a lesson. Teachers are
                  able to set their availability for providing classes, review
                  students’ profiles and accept lesson requests. For both user
                  groups there is an additional option to communicate via a
                  private chat.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    “Learning a new instrument with the best teachers in your
                    area is just a click away!„
                  </small>
                </p>
                <a className="link--external" href="">
                  Go to App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default ProjectsPage;
