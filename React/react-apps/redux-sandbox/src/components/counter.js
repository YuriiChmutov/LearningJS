import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions'


export const Counter = (props) => {
	return(
		<div className="jumbotron">
			<h2>
				{props.counter}
			</h2>
			<button
				onClick={props.dec} 
				className="btn btn-primary btn-large mr-2">DEC</button>
      		<button 
			  	onClick={props.inc}
			  	className="btn btn-primary btn-large mr-2">INC</button>
      		<button 
			  	onClick={props.rnd}
			  	className="btn btn-primary btn-large">RND</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		counter: state
	}
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators(actions, dispatch);

	// return {
	// 	inc, //: () => dispatch(inc())
	// 	dec: () => dispatch(dec()),
	// 	rnd
	// }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);