import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './nav.css';


class Navigation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let links = this.props.routes.map((routeObj, idx) => {
      let href = `/${routeObj.route}/`;

      return <Nav.Item key={idx + 1}>
          <NavLink to={href} className={"nav-link"} role={"button"}>
            {routeObj.route}
          </NavLink>
        </Nav.Item>;
    });
    return <Navbar id="side-nav" bg="light" expand="lg">
      <Nav className="mr-auto">
        <Nav.Item key={0}>
          <NavLink to={"/"} className={"nav-link"} role={"button"}>
            Home
          </NavLink>
        </Nav.Item>
        {links}
      </Nav>
    </Navbar>;
  }
}

export default Navigation;
