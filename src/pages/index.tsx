import { graphql } from 'gatsby';
import React from 'react';
import 'typeface-nunito-sans';
import './index.scss';
// import * as styles from './Index.module.scss';

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;

    return (
      <div className="App">
        <div className="backgroundImage" />
        <div className="spinnerOuterRombus" />
        <div className="spinnerMiddleRombus" />
        <div className="innerRombus">
          <div className="nameContainer">
            <p className="name">
              Eleni <br />
              Zoumpoulaki
            </p>
          </div>
        </div>
      </div>
    );
  }
}
