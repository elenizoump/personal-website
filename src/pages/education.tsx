import React, { FunctionComponent } from 'react';
import VerticalTimelineEducation from '../components/VerticalTimelineEducation';
import MainLayout from '../layouts/Main';

const EducationPage: FunctionComponent = () => {
  return (
    <MainLayout>
      <div className="educationWrapper">
        <div className="educationTitle">
          <h1>Academic & Professional Background</h1>
        </div>
        <div className="educationContent">
          <VerticalTimelineEducation />
        </div>
      </div>
    </MainLayout>
  );
};

export default EducationPage;
