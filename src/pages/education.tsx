import React, { FunctionComponent, useState } from 'react';
import ReactHorizontalTimeline from 'react-horizontal-timeline';
import MainLayout from '../layouts/Main';

const VALUES = [
  '1993-01-01',
  '2011-01-01',
  '2015-01-01',
  '2018-01-01',
  '2019-01-01',
  '2020-01-01'
];

const EducationPage: FunctionComponent = () => {
  const [timelineIndex, setTimelineIndex] = useState(0);
  return (
    <MainLayout>
      <div className="educationContainer">
        <div className="educationContainerContentWrapper">
          {/* Bounding box for the Timeline */}
          <div className="timeline">
            <ReactHorizontalTimeline
              getLabel={(date: string) => new Date(date).getFullYear()}
              styles={{
                overflow: 'visible',
                background: 'rgb(125, 194, 194)',
                foreground: '#7b9d6f',
                outline: 'rgb(198, 226, 227)'
              }}
              index={timelineIndex}
              indexClick={(index: number) => {
                setTimelineIndex(index);
              }}
              values={VALUES}
            />
          </div>
          <div className="textWrapper">
            <div className="text-center">
              {/* any arbitrary component can go here */}
              {timelineIndex}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EducationPage;
