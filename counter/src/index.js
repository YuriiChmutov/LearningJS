import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(countReducer);

const Component = ({count, handleIncrementClick, handleDecrementClick}) => {
return (
      <div>
        <h1>Helloworld React & Redux! {count}</h1>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementClick}>Increment</button>
      </div>
)}

const mapStateToProps = state => {
  return {
    count: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const App = () => (
  <Provider store={store}>
    <Container/>
  </Provider>
);

ReactDOM.render(
  
    <App/>
 ,
  document.getElementById('root')
);


//serviceWorker.unregister();
