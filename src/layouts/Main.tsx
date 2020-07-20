import React, { FunctionComponent } from 'react';
import 'typeface-cormorant-garamond';
import 'typeface-catamaran';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import NavbarComponent from '../components/navbar';

const MainLayout: FunctionComponent = ({ children }) => (
  <div className="all-wrapper">
    <NavbarComponent />
    <div className="content-wrapper">{children}</div>
  </div>
);

export default MainLayout;
