import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

import ItemTable from './components/itemTable.js';


class ListPage extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: {
			  "count": 0,
			  "next": null,
			  "previous": null,
			  "results": []
			},
			currIdx: 0,
		};

		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.newPage = this.newPage.bind(this);
		this.firstPage = this.firstPage.bind(this);
		this.lastPage = this.lastPage.bind(this);
		this.extractCurrIdx = this.extractCurrIdx.bind(this);
	}

	//based on previous and next links, extract the page param and setup currIdx
	extractCurrIdx(response) {
		let idx = 1;
		if(response.previous === null) {
		} else if (response.next === null){
			idx = Math.ceil(this.state.items.count / 10);
		} else {
			idx = Number(response.next.split("page=")[1]) - 1;
		}

		return idx;
	}

	componentDidMount() {
		//get first page of items
		this.props.api.getList(this.props.pageName)
		.then(data => {
			let currIdx = this.extractCurrIdx(data);

			this.setState({
				items: data,
				currIdx: currIdx,
			})
		});
	}

	//get page based on pageId
	newPage(pageId) {
		this.props.api.getPage(this.props.pageName, pageId)
		.then(data => {
			let currIdx = this.extractCurrIdx(data);

			this.setState({
				items: data,
				currIdx: currIdx,
			})
		});
	}

	prevPage() {
		let idx = this.state.currIdx - 1;
		if(idx <= 0) {
			return;
		}
		this.newPage(idx);
	}

	nextPage() {
		this.newPage(this.state.currIdx + 1);
	}

	firstPage() {
		this.newPage(1);
	}
	lastPage() {
		this.newPage(Math.ceil(this.state.items.count / 10));
	}

	renderPagination(total, curr) {
		let prev = curr - 1;
		let next = curr + 1;
		let isLastIdx = Math.ceil(this.state.items.count / 10) === curr;
		let isFirstIdx = !curr > 0 || !prev > 0;

		return <Pagination>
			<Pagination.First disabled={isFirstIdx} onClick={this.firstPage} />
			<Pagination.Prev disabled={isFirstIdx} onClick={this.prevPage} />
			<Pagination.Item hidden={isFirstIdx} onClick={this.prevPage} >{prev}</Pagination.Item>
			<Pagination.Item active>{curr}</Pagination.Item>
			<Pagination.Item hidden={isLastIdx} onClick={this.nextPage} >{next}</Pagination.Item>
			{/* <Pagination.Ellipsis /> */}
			<Pagination.Next disabled={isLastIdx} onClick={this.nextPage}/>
			<Pagination.Last disabled={isLastIdx} onClick={this.lastPage} />
		</Pagination>;
	}

	render() {
		if(this.state.items.results <= 0) {
			return <h1>No items found!</h1>;
		}

		return <>
			{this.renderPagination(this.state.items.count, this.state.currIdx)}
			<ItemTable previewName={this.props.previewName} items={this.state.items} />
			{this.renderPagination(this.state.items.count, this.state.currIdx)}
		</>;
	}
}

export default ListPage;