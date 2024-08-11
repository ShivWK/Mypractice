export default function myCreateStore(reducer) {

    let state;

    const store = {

        dispatch(action) {
            state = reducer(state, action)
        },

        getState() {
            return state;
        },

        subscribe(method) {
            method();
        }

    }
    store.dispatch({type : '@@INIT'})
    //dispatched initially to store the initial value otherwise getState will give error because there is nothing in state as redux do 
    return store;
}