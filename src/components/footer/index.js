import React, { Component } from 'react';

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <p>Copyright © {year} by John Yacuta. Built with React.</p>
      </footer>
    );
  }
}

export default Footer;
