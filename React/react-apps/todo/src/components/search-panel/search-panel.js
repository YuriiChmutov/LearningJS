import React, {Component} from 'react';
import './search-panel.css';


class SearchPanel extends Component {

	state = {
		term: ''
	}

	onSearchChange = (e) => {
		const term = e.target.value;

		this.setState({term});
		this.props.onSearchChange(term);
	};

	render () {
		const searchText = 'Type here to search';
		return (
			<form>
				<input className="form-control col-12 mb-2 mt-2" 
					   type="text"
					   placeholder= {searchText}
					   onChange={this.onSearchChange}
					   value={this.state.value}
					   />
			</form>
		);
	}
}

export default SearchPanel;