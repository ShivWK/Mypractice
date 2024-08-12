export default function myCreateStore(reducer) {

    let state;
    const listeners = [];

    const store = {
        dispatch(action) {
            state = reducer(state, action)

            for (let methodS of listeners) {
                methodS();
            }
        },

        getState() {
            return state;
        },

        subscribe(method) {
            listeners.push(method);

            return () => {
                const listenerIndex = listeners.findIndex((listener) => {
                     return  listener === method;
                })

                listeners.splice(listenerIndex, 1);
            }
        }
    }
    store.dispatch({type : '@@INIT'})

    return store;
}


 //dispatched initially to store the initial value otherwise getState will give error because there is nothing in state as redux do