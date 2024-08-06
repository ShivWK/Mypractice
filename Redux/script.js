let reduxState = {
    post : 0,
    name : "Shivendra",
    age : 25
}

function reducer(state, action){
    if(action.type === 'post/increment'){
        return {...state, post : state.post + 1}
    }else if(action.type === 'post/decrement'){
        return {...state, post : state.post - 1}
    }else if(action.type === 'post/incrementBy'){
        return {...state, post : state.post + action.payLoad}
    }else{
        return state;
    }
}

console.log(reduxState);

//redux updates the state by giving it new returned object by itself, means here object returned by reducer will be given to the state

reduxState = reducer(reduxState, {type: 'post/increment'})
console.log(reduxState);

reduxState = reducer(reduxState, {type: 'post/decrement'})
console.log(reduxState);

reduxState = reducer(reduxState, {type: 'post/increment'})
console.log(reduxState);

reduxState = reducer(reduxState, {type: 'post/increment'})
console.log(reduxState);

reduxState = reducer(reduxState, {type: 'post/incrementBy', payLoad : 2})
console.log(reduxState);

