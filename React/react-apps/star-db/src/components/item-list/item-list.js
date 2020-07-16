import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Spinner from '../spinner';


class ItemList extends Component {

	swapi = new SwapiService();

	state = {
		peopleList: null
	};

	componentDidMount() {
		this.swapi
			.getAllPeople()
			.then((peopleList) => {
				this.setState({
					peopleList 
				});
			});
	}

	renderCharacters(arr) {
		return arr.map((person) => {
			return (
				<li className="list-group-item" 
					key={person.id}
					onClick={() => this.props.onItemSelected(person.id)}>
					{person.name}
				</li>
			);
		})
	}

	render() {

		const { peopleList } = this.state;

		if(!peopleList) {
			return <Spinner/>
		};

		
		const items = this.renderCharacters(peopleList)
		

		return(
			<div className="item-list list-group">
				<ul className="list-group">
					{items}
					{/* <li className="list-group-item">
						Luke Skywalker
					</li> */}
					{/* <li className="list-group-item">
						Darth Vader
					</li>
					<li className="list-group-item">
						R2-D2
					</li> */}
				</ul>
			</div>
		);
	}
}

export default ItemList;