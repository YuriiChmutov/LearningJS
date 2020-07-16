import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const App = () => {

	
	const [value, setValue] = useState(1);
	const [visible, setVisible] = useState(true);

	if(visible){
		return(
			<div>
				<button onClick={() => setValue((v) => v + 1)}>+</button>
				<button onClick={() => setVisible(false)}>Hide</button>
				{/* <ClassCounter value={value}/> */}
					<PlanetInfo id = {value}/>
				<div>Close me</div>

			</div>
			
		);
	} else {
		return <button onClick={() => setVisible(true)}>Show</button>
	}
  
};

const getPlanet = (id) => {
	return fetch(`https://swapi.dev/api/planets/${id}`)
	.then(res => res.json())
	.then(data => data);
}

const useRequest = (request) => {
	const [dataState, setDataState] = useState(null);

	useEffect(() => {
		let cancelled = false;

	request()
		.then(data => !cancelled && setDataState(data));
		
	return () => cancelled = true;

	}, [request]);

	return dataState;
}

const usePlanetInfo = (id) => {

	const request = () => getPlanet(id);
	return useRequest(request);
};

const PlanetInfo = ({id}) => {

	const data = usePlanetInfo(id);

	return(
		<div>
			{id} - {data && data.name}
		</div>
	);
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

