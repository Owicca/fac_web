import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function IndexPage(props) {
	return <Jumbotron fluid>
	  <Container>
	    <h1>Welcome</h1>
	    <div>
	    	Instructions here
	    	<ul>
	    		<li>step 1</li>
	    		<li>step 2</li>
	    		<li>step 3</li>
	    	</ul>
	    </div>
	  </Container>
	</Jumbotron>;
}

export default IndexPage;
