import {INC, DEC, CHANGE_THEME} from './types';

export function increment(){
    return{
        type: INC
    }
}

export function decrement(){
    return{
        type: DEC
    }
}

export function changeTheme(newTheme){
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

// export function asyncInc(){
//     return{
//         type: ASYNC_INC
//     }
// }