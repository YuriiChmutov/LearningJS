import React from 'react';
import './spinner.css';

const Spinner = () => {
	return(
		<div className="d-flex justify-content-center">
		<div className="lds-roller "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	);
}

export default Spinner;