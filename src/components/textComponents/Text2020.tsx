import React, { FunctionComponent } from 'react';

import text2020 from '../../images/text2020.png';

const Text2020: FunctionComponent = () => (
  <div
    className="card mb-3 textComponent"
    style={{ backgroundColor: 'rgba(77, 118, 132, 0.74)', padding: '1rem' }}
  >
    <div className="row no-gutters">
      <div className="col-md-4 imageArea">
        <img
          src={text2020}
          className="card-img"
          alt="..."
          // style={{ borderRadius: '80%' }}
        />
      </div>
      <div className="col-md-8 textarea">
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            2019 Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Text2020;
