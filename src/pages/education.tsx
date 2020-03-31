import React, { FunctionComponent, useState } from 'react';
import ReactHorizontalTimeline from 'react-horizontal-timeline';
import MainLayout from '../layouts/Main';
import Text1993 from '../components/textComponents/Text1993';
import Text2011 from '../components/textComponents/Text2011';
import Text2015 from '../components/textComponents/Text2015';
import Text2018 from '../components/textComponents/Text2018';
import Text2019 from '../components/textComponents/Text2019';
import Text2020 from '../components/textComponents/Text2020';

const COMPONENTS = [Text1993, Text2011, Text2015, Text2018, Text2019, Text2020];

const VALUES = [
  '1993-01-01',
  '2011-01-01',
  '2015-01-01',
  '2018-01-01',
  '2019-01-01',
  '2020-01-01',
];

const EducationPage: FunctionComponent = () => {
  const [timelineIndex, setTimelineIndex] = useState(0);
  return (
    <MainLayout>
      <div className="educationContainer">
        <div className="educationContainerContentWrapperOuter">
          <div className="educationContainerContentWrapper">
            <h1
              className="educationTitle"
              style={{
                backgroundColor: 'rgba(133, 227, 221, 0.61)',
              }}
            >
              Academic & Professional Background
            </h1>
            {/* Bounding box for the Timeline */}
            <div className="timeline">
              <ReactHorizontalTimeline
                getLabel={(date: string) => new Date(date).getFullYear()}
                minEventPadding={150}
                styles={{
                  //overflow: 'visible',
                  background: 'rgb(102, 143, 157)',
                  foreground: 'rgba(137, 222, 218, 0.62)',
                  outline: 'rgb(198, 226, 227)',
                }}
                index={timelineIndex}
                indexClick={(index: number) => {
                  setTimelineIndex(index);
                }}
                values={VALUES}
              />
            </div>
          </div>
          <div className="textWrapper">
            <div className="text-center">
              {VALUES.map((dateString: string, index) => {
                const year = dateString.substring(0, 4);
                const YearTextComponent = COMPONENTS[index];
                const isVisible = index === timelineIndex;
                if (!isVisible) {
                  return null;
                }

                return <YearTextComponent key={year} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EducationPage;
