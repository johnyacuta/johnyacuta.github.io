import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const title = 'Projects';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{marginTop: 50, marginBottom: 50, width: '25rem'}}>{title}</h1>
        </Row>
        <div title="content" class="text-left">
          <p>
            In my years of working in Software and DevOps/Platform engineering, I have worked on a variety of projects and with many different teams.
            I have found that one of the most rewarding aspects of my career has been solving complex problems and sharing that knowledge with others.
          </p>
          <p>
            Below are various projects that I have worked on.
          </p>
          <h3>Personal Projects</h3>
          <ul>
            <li>My personal website</li>
            <ul>
              <li>
                This website is built using React. It serves as a platform for me to share my thoughts and experiences in the tech industry.
                I wanted to create a space where I could document my journey and connect with others in the community.
                Built with React.
              </li>
            </ul>
            <li>Base64 Converter</li>
            <ul>
              <li>
                I created a simple Base64 converter tool that allows users to encode and decode Base64 strings.
                This project was born out of a need for a quick and easy way to convert data without having to rely on external tools or websites.
                Built with Python and Typer.
              </li>
            </ul>
            <li>Personal website - Laurel</li>
            <ul>
              <li>
                I built my wife a personal website which is very similar to this one which I could consider it a framework for building portfolio website.
                Built with React.
              </li>
            </ul>
            <li>Do Something Application</li>
            <ul>
              <li>
                A web application that allows users to search using zip codes for political figures who have received funding from a gun organization(s).
                The web application leverages a public API for data retrieval.
                Built with React.
              </li>
            </ul>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Projects;
