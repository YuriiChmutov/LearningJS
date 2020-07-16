import React, {Component, useState} from 'react';
import './app.css';
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PersonDetails from '../person-details';
import ItemList from '../item-list'
// class App {


class App extends Component {

	swapiService = new SwapiService();

	state = {
		peopleList: null
	};

	render() {
		return(
			<div className="">
				<HookSwitcher/>
				<Header/>
				<RandomPlanet/>
				
				<PeoplePage/>
				
				{/* <div className="container-fluid row">  
					<div className="ml-1 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
						<PersonDetails personId = {this.state.selectedPerson}/>
					</div>
					<div className="ml-1 col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
						<ItemList 
							onItemSelected = {this.onPersonSelected}
							getData={this.swapiService.getAllPlanets}
						/>
					</div>
				</div> */}

			</div>
			
		);
	}
}

const HookSwitcher = () => {
	const [color, setColor] = useState('white');

	const setDark = () => setColor('black');
	const setWhite = () => setColor('white');

	return(
		<div style={{padding: '10px', backgroundColor: 'yellow'}}>
			<button onClick={() => setDark}> Dark </button>
			<button onClick={setWhite}> White </button>
		</div>
	);

}

export default App;











