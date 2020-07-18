import React, { FunctionComponent } from 'react';
import HomeLayout from '../layouts/Home';
import SpecialLink from '../components/SpecialLink';

const IndexPage: FunctionComponent = () => (
  <HomeLayout>
    <div className="App">
      <div className="backgroundImage" />
      <div className="spinnerOuterRombus" />
      <div className="spinnerMiddleRombus" />
      <div className="innerRombus">
        <div className="portfolioContainer">
          <SpecialLink className="nameLink" href="/about">
            <h1 className="portfolio">Portfolio</h1>
          </SpecialLink>
        </div>
      </div>
    </div>
  </HomeLayout>
);

export default IndexPage;
