import React, {Component} from 'react';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import './people-page.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service'

class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		hasError: false
	}

	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}

	onPersonSelected = (id) => {
		this.setState( {
			selectedPerson: id
		});
	};

	render() {

		if(this.state.hasError){
			return <ErrorIndicator/>
		}

		return(
			<div className="container-fluid row">  
					<div className="ml-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
						<PersonDetails personId = {this.state.selectedPerson}/>
					</div>
					<div className="ml-1 col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
						<ItemList 
							onItemSelected = {this.onPersonSelected}
							getAllPeople = {this.swapiService.getAllPeople}
						/>
					</div>
			</div>
		);
	}
}

export default PeoplePage;