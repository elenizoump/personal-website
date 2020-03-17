import React, { FunctionComponent } from 'react';
import HomeLayout from '../layouts/Home';

const IndexPage: FunctionComponent = () => (
  <HomeLayout>
    <div className="App">
      <div className="backgroundImage" />
      <div className="spinnerOuterRombus" />
      <div className="spinnerMiddleRombus" />
      <div className="innerRombus">
        <div className="portfolioContainer">
          <h1 className="portfolio">Portfolio</h1>
        </div>
      </div>
    </div>
  </HomeLayout>
);

export default IndexPage;
