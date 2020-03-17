import React, { FunctionComponent } from 'react';
import MainLayout from '../layouts/Main';

const ProjectsPage: FunctionComponent = () => (
  <MainLayout>
    <div className="projectsWrapper">
      <div className="projectStyle1">
        <div className="projectDetailsContainer">
          <div className="projectTextContainer"></div>
        </div>
        <div className="projectPicContainer"></div>
      </div>
      <div className="projectStyle2">
        <div className="projectDetailsContainer">
          <div className="projectTextContainer"></div>
        </div>
        <div className="projectPicContainer"></div>
      </div>
    </div>

    {/* <div className="projectStyle1">
      <div className="projectDetailsContainer">
        <div className="projectPicContainer"></div>
      </div>
    </div>
    <div className="projectStyle1">
      <div className="projectDetailsContainer">
        <div className="projectPicContainer"></div>
      </div>
    </div>
    <div className="projectStyle1">
      <div className="projectDetailsContainer">
        <div className="projectPicContainer"></div>
      </div>
    </div> */}
  </MainLayout>
);

export default ProjectsPage;
