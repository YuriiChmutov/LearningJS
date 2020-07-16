import React, {Component} from 'react';

import './add-item.css';

class AddItem extends Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});	
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({
			label: ''
		});
		
	}

	render() {

		return (
			<form className="add-item mt-2 d-flex justify-content-between"
				onSubmit={this.onSubmit}>

				<input type="text" 
					className="form-control d-flex mr-2"
					onChange={this.onLabelChange}
					placeholder="What needs to be done"
					value={this.state.label}/>
	
				<button className="btn btn-outline-primary">
					Add Item
				</button>
			</form>
		);
	}
}

export default AddItem;