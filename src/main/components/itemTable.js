import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ItemDetail(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let itemAttrTable = [];
	for(let attr in props.item) {
		itemAttrTable.push(<tr key={attr}><td>{attr}</td><td>{props.item[attr]}</td></tr>);
	}

	return <>
      <Button variant="primary" onClick={handleShow}>
        {props.label}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        	<Table striped bordered hover size="sm">
        		<tbody>
        			{itemAttrTable}
        		</tbody>
			</Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}

function ItemTableBody(props) {
	let items = props.items;

	let trList = props.previewItems.map((item, idx) => {
		return <tr key={idx}>
			<td>{item.id}</td>
			<td>{item.name}</td>
			<td><ItemDetail label={"View more"} item={items[idx]}/></td>
		</tr>;
	});

	return <tbody>
		{trList}
	</tbody>;
}

function ItemTableHeader(props) {
	return <thead>
		<tr>
			<th>#</th>
			<th>Name</th>
		</tr>
	</thead>;
}

function ItemTable(props) {
	if(!props.items.count > 0) {
		return <h1>No items found!</h1>;
	}

	let columns = Object.keys(props.items.results[0]);
	let previewItems = props.items.results.map((item, idx) => {
		let splitUrl = item.url.split("/");
		let id = splitUrl[splitUrl.length - 2];
		return {
			id: id,
			name: item[props.previewName],
		};
	});

	return <Table striped bordered hover size="sm">
		<ItemTableHeader columns={columns} />
		<ItemTableBody previewName={props.previewName} previewItems={previewItems} items={props.items.results} />
	</Table>;
}

export default ItemTable;