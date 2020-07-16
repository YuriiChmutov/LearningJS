import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return(
    <div>
      <HookSwitcher/>
    </div>
  );
};

const HookSwitcher = () => {

  const [ color, setColor ] = useState('white')
  const [ fontSize, setSize ] = useState(14);
  
  return(
    <div style={{padding: '10px', backgroundColor: color, fontSize: fontSize}}>
    Hello
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setSize((s) => s + 2)}>+</button>
      <button onClick={() => setSize((s) => s - 2)}>-</button>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

