let Api = function(endpoints) {
	let $this = this;

	$this.base = "https://swapi.dev/api/";
	$this.endpoints = endpoints

	$this.getList = function(endpoint) {
		if(!$this.endpoints.includes(endpoint)) {
			return false;
		}

		let url = `${$this.base}${endpoint}/`;

		return fetch(url).then(js => js.json());
	}
	$this.getOne = function(endpoint, id) {
		if(!$this.endpoints.includes(endpoint)) {
			return false;
		}
		
		let url = `${$this.base}${endpoint}/${id}/`;

		return fetch(url).then(js => js.json());	
	}

	$this.getPage = function(endpoint, pageNo) {
		if(!$this.endpoints.includes(endpoint) || pageNo <= 0) {
			return false;
		}

		let url = `${$this.base}${endpoint}/?page=${pageNo}`;

		return fetch(url).then(js => js.json());
	}

	return $this;
};

export default Api;