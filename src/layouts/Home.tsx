import React, { FunctionComponent } from 'react';
import 'typeface-cormorant-garamond';
import 'typeface-catamaran';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/home.scss';

const HomeLayout: FunctionComponent = ({ children }) => (
  <div className="App">{children}</div>
);

export default HomeLayout;
