import {INC, DEC, CHANGE_THEME} from './types';
import { combineReducers } from 'redux';

function counterReducer(state = 0, action){
    if(action.type === INC){
        return state + 1;
    }
    else if(action.type === DEC){
        return state -1;
    }
    // else if(action.type === ASYNC_INC){
    //     setTimeout(() => {
    //         return
    //     }, 2000)
    // }

    return state
}

const initialTheme = {
    value: 'light'
}

function themeReducer(state = initialTheme, action){
    switch(action.type){
        case CHANGE_THEME: 
            return {...state, value: action.payload}
        default: return state
    }
}


export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})