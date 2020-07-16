import React from 'react';
import './header.css';


const Header = () => {
	return(
		<div className="header container d-flex"> 
			<h3 className="logo">
				<a href="#">
					Star DB
				</a>
			</h3>

			<ul className="d-flex justify-content-around">
				<li>
					<a href='#'>People</a>
				</li>
				<li>
					<a href="#">Planets</a>
				</li>
				<li>
					<a href="#">Starships</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;