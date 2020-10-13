import React from 'react';

import Navigation from './nav.js';


class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <header className="container">
    		<link
    		  rel="stylesheet"
    		  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    		  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    		  crossOrigin="anonymous"/>
        <Navigation routes={this.props.routes}></Navigation>
      </header>;
  }
}

export default Header;
