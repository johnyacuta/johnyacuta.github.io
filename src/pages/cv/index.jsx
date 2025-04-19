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
            Please contact me on LinkedIn to get in touch with me. I would love to connect and share more information about my qualifications.
          </p>
        </Row>
      </Container>
    );
  }
}

export default CV;
