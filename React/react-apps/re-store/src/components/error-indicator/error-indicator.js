import React from 'react';
import './error-indicator.css';
import icon from './error-ghost-96.png';

const ErrorIndicator = () => {
	return(
		<div className="d-flex justify-content-center">
			<img src={icon} alt="ghost error"/>
		</div>
	);
}

export default ErrorIndicator;