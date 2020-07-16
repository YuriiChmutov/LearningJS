import React from 'react';

import './error-indicator.css';
import icon from './death-star-96.png';


const ErrorIndicator = () => {
	return(
		<div className="error-indicator text-center">
			<img src={icon} alt="death star"/>
			<span className="boom">BOOM!</span>
			<span>
				something has gone terrible wrong
			</span>
			<span>
				(but we already sent droids to fix it)
			</span>
		</div>	
	);
}

export default ErrorIndicator;