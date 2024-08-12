import { createStore } from 'redux';
import myCreateStore from './myCreateStore';
const postCount = document.getElementById('post_count');
const postBtn = document.getElementById('postBtn')

//const store2 = myCreateStore();

// console.log(store2);

let initialState = {
    post: 5,
    name: "Shivendra",
    age: 22
}
const increament = 'post/increment';
const decrement = 'post/decrement';
const increaseBy = 'post/increaseBy';

function reducer(state = initialState, action) {
    if (action.type === increament) {
        return { ...state, post: state.post + 1 }
    } else if (action.type === decrement) {
        return { ...state, post: state.post - 1 }
    } else if (action.type === increaseBy) {
        return { ...state, post: state.post + action.payload }
    } else {
        return state;
    }
}

const actionIncrement = () => {
    return {
        type: increament,
    }
}

const actionDecrement = () => {
    return {
        type: decrement,
    }
}

const actionIncrementBy = (by) => {
    return {
        type: increaseBy,
        payload: by,
    }
}

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = myCreateStore(reducer);
const store = myCreateStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
    postCount.innerText = store.getState().post
});

const unsubscribe2 = store.subscribe(() => { console.log("second")})

postCount.innerText = store.getState().post

// console.log(store.getState());

store.dispatch(actionIncrement());

store.dispatch(actionDecrement());
// unsubscribe();
// unsubscribe2();
store.dispatch(actionIncrementBy(2));


postBtn.addEventListener('click' , () => {
    store.dispatch(actionIncrement());
})


// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/decrement'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/increment'})
// console.log(reduxState);

// reduxState = reducer(reduxState, {type: 'post/incrementBy', payLoad : 2})
// console.log(reduxState);

//redux updates the state by giving it new returned object by itself, means here object returned by reducer will be given to the state
