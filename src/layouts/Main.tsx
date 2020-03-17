import React, { FunctionComponent } from 'react';
import 'typeface-cormorant-garamond';
import 'typeface-catamaran';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import Navbar from '../components/navbar';

// interface MainLayoutProps {
//   imgsrc: string;
// }

const MainLayout: FunctionComponent = ({ children }) => (
  <div className="all-wrapper">
    <Navbar />
    <div
      className="content-wrapper"
      // style={{ backgroundImage: `url(${imgsrc})` }}
    >
      {children}
    </div>
  </div>
);

export default MainLayout;
