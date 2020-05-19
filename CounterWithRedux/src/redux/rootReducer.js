import {INC, DEC, ASYNC_INC} from './types';

export function rootReducer(state, action){
    if(action.type === INC){
        return state + 1;
    }
    else if(action.type === DEC){
        return state -1;
    }
    else if(action.type === ASYNC_INC){
        setTimeout(() => {
            return
        }, 2000)
    }

    return state
}