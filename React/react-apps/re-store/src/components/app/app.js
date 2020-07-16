import React from 'react';
import './app.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';

const App = () => {
	return (
		<div className="container-bg">
			<div className="container bg-primary">
				<Spinner/>
				<ErrorIndicator/>
			</div>
		</div>
	);
}

export default App;