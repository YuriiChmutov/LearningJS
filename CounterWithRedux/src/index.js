import './styles.css'
import {createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {increment, decrement, changeTheme} from './redux/actions';

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', ()=>{
    store.dispatch(increment());
})

subBtn.addEventListener('click', ()=>{
   store.dispatch(decrement());
})

// asyncBtn.addEventListener('click', ()=>{
    
// })

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
   store.dispatch(changeTheme())
})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter 
    document.body.className = state.theme.value
})

store.dispatch({type: 'INIT_APP'})

