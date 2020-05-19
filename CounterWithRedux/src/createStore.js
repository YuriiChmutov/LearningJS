export function createStore(rootReducer, initialState){
    let state = rootReducer(initialState, {type: 'INIT_APP'});
    const subscribers = []


    return{
        dispatch(){
           state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(callback){
            subscribers.push(callback);
        },
        getState(){
            return state;
        }
    }
}