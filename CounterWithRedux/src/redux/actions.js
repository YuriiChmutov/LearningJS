import {INC, DEC, ASYNC_INC} from './types';

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

export function asyncInc(){
    return{
        type: ASYNC_INC
    }
}