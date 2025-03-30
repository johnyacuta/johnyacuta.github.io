import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'About Me';

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="/john-about-me.jpg" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
            <p class="text-left">
              I am originally from the San Fernando Valley north of Los Angeles in California. I received my undergraduate degree in
              Computer Science from the University of California, Davis. And when not hands on keybpoard, I am an avid woodworker, gamer, and reader!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
