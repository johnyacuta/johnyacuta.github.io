import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const title = 'Welcome to my personal website!';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center" >
          <h1 style={{marginTop: 50, marginBottom: 50, width: '50rem'}}>{title}</h1>
        </Row>
        <Row>
          <Col>
            <Image src="/john-profile.JPG" rounded style={{marginTop: 50, marginBottom: 50, width: '25rem'}}></Image>
          </Col>
          <Col style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>
            <p class="text-left">
              Hi all and thank you for visiting my website! I am a Software Engineer, DevOps/Platform Engineer, and Technical Leader.
            </p>
            <p class="text-left">
              I have developed a wide range of software applications and systems, from full-stack web applications to distributed systems and microservices. I have a passion for building scalable, reliable, and efficient systems that solve real-world problems. I also enjoy mentoring and helping others grow in their careers.
            </p>
            <p class="text-left">
              On this website, you will find a collection of my thoughts on various technical topics, including software development, system design, cloud computing, and more. I also share some of my personal projects and open-source contributions.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
