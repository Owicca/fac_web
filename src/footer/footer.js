import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <footer className="container">
      <Navbar className="bg-light" expand="lg">
      <Navbar.Brand>Powered by:</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item><Nav.Link href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML5</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank">Javascript es6</Nav.Link></Nav.Item>
      </Nav>
      </Navbar>
    </footer>;
  }
}

export default Footer;
