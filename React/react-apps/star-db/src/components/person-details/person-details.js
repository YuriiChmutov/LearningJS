import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';
import Spinner from '../spinner';

class PersonDetails extends Component {

	swapi = new SwapiService();

	state = {
		person: null,
		loading: false
	};

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if(this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	onPersonLoaded = (person) => {
		this.setState({
			person,
			loading: true
		});
	}

	updatePerson() {
		const { personId } = this.props;

		if(!personId) {
			return;
		}

		this.swapi.getPerson(personId)
			.then(this.onPersonLoaded);
	}



	render() {

		if(!this.state.person) {
			return <span>Select a person from a list</span>
		}


		const { person, loading } = this.state;

		const spinner = !loading ? <Spinner/> : null;
		const content = loading ? <PersonView person = {person}/> : null;

		if(!person) { 
			return {spinner}
		}

		return(
			<div className="person-details card">
				{content}
				{/* {spinner} */}
				
				{/* <Spinner/> */}
			</div>
		);
	}
}

const PersonView = ({person}) => {

	const {	id, name, gender, birthYear, eyeColor } = person;

	return(
		<React.Fragment>
			<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
					alt="Character"/>
				
				<div className="card-body">
					<h4 className="ml-3">{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
		</React.Fragment>
	);
}


export default PersonDetails;