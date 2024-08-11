import * as redux from 'redux';
const createStore = redux.createStore;

let initialState = {
    post : 0,
    name : "Shivendra",
    age : 25
}
const increament = 'post/increment';
const decrement = 'post/decrement';
const increaseBy = 'post/increaseBy';

function reducer(state = initialState, action){
    if(action.type === increament){
        return {...state, post : state.post + 1}
    }else if(action.type === decrement){
        return {...state, post : state.post - 1}
    }else if(action.type === increaseBy){
        return {...state, post : state.post + action.payload}
    }else{
        return state;
    }
}

const actionIncrement = () => {
    return {
        type : increament,
    }
}

const actionDecrement = () => {
    return {
        type : decrement,
    }
}

const actionIncrementBy = (by) => {
    return {
        type : increaseBy,
        payload : by,
    }
}

const store = createStore(reducer);
store.subscribe(() => { console.log(store.getState())});

store.dispatch(actionIncrement());
store.dispatch(actionDecrement());
store.dispatch(actionIncrementBy(2));

// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/decrement'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/incrementBy', payLoad : 2})
// console.log(reduxState);

//redux updates the state by giving it new returned object by itself, means here object returned by reducer will be given to the state
