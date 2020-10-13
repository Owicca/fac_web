import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Main from './main/main.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		
		return <BrowserRouter>
        <Header routes={this.props.routes}>
        </Header>
        <main className="container">
          <Main routes={this.props.routes} api={this.props.api} >
          </Main>
        </main>
        <Footer>
        </Footer>
      </BrowserRouter>;
	}
}

export default App;
