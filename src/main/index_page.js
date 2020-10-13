import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function IndexPage(props) {
	return <Jumbotron fluid>
	  <Container>
	    <h1>Welcome</h1>
	    <div>
	    	<p>
	    		This is a client wrapper around <a href="https://swapi.dev/" target="_blank">swapi</a>.
	    	</p>
	    	<p>
	    		To explore the entities, use the navigation bar at the top.
	    	</p>
	    	<div>
	    		<p>
	    			Technologies used:
	    		</p>
	    		<ul>
	    			<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML5</a></li>
	    			<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</a>:
	    				<ul>
	    					<li><a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank">Bootstrap 4.5</a></li>
	    				</ul>
	    			</li>
	    			<li><a href="https://developer.mozilla.org/en-US/docs/Web/javascript" target="_blank">Javascript es6</a>:
	    				<ul>
	    					<li><a href="https://reactjs.org/docs/getting-started.html" target="_blank">React</a></li>
	    					<li><a href="https://reactrouter.com/web/guides/quick-start" target="_blank">React Router</a></li>
	    					<li><a href="https://react-bootstrap.github.io/getting-started/introduction" target="_blank">React Bootstrap 1.3.0</a></li>
	    				</ul>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	  </Container>
	</Jumbotron>;
}

export default IndexPage;
