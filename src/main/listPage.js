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
	}

	componentDidMount() {
		this.props.api.getList(this.props.pageName)
		.then(data => {
			let currIdx = data.previous === null ?
			1 : Number(data.next.split("page=")[1]);

			this.setState({
				items: data,
				currIdx: currIdx,
			})
		});
	}

	newPage(pageId) {
		this.props.api.getPage(this.props.pageName, pageId)
		.then(data => {
			let currIdx = data.previous === null ?
			1 : Number(data.next.split("page=")[1]);
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

	renderPagination(total, curr) {//TODO: fix the last fucking page events
		let lastItem = Math.ceil(this.state.items.count / 10) === curr;
		let prev = curr - 1;
		let next = curr + 1;

		return <Pagination>
			<Pagination.First disabled={!curr > 0} onClick={this.firstPage} />
			<Pagination.Prev disabled={!curr > 0} onClick={this.prevPage} />
			<Pagination.Item hidden={!prev > 0} onClick={this.prevPage} >{prev}</Pagination.Item>
			<Pagination.Item active>{curr}</Pagination.Item>
			<Pagination.Item hidden={lastItem} onClick={this.nextPage} >{next}</Pagination.Item>
			{/* <Pagination.Ellipsis /> */}
			<Pagination.Next disabled={lastItem} onClick={this.nextPage}/>
			<Pagination.Last disabled={lastItem} onClick={this.lastPage} />
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