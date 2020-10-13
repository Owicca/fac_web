import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Api from './api/api.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

let routes = [
    "people",
    "planets",
    "films",
    "species",
    "vehicles",
    "starships",
];

let api = new Api(routes);

let routesWithName = routes.map(item => {
	let obj = {
		"route": item,
		"name": "name",
	};
	if(item === "films") {
		obj.name = "title";
	}

	return obj;
})


ReactDOM.render(
  <React.StrictMode>
    <App routes={routesWithName} api={api} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
