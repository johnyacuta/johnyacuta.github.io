import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const title = 'Curriculum Vitae';

class CV extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row className="justify-content-md-center">
          <p>
            2025 - TBD
          </p>
        </Row>
        <Row className="justify-content-md-center">
          <p>
            Below is my CV, or you can contact me for more information.
          </p>
        </Row>
        {/* <Row className="justify-content-md-center">
          <iframe title="CV" src="" width={900} height={900}></iframe>
        </Row> */}
      </Container>
    );
  }
}

export default CV;
