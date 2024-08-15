import { createStore } from 'redux';

import cartReducer, {
    addItemToCart,
    removeItemFromCart,
    addQuantityToCart,
    removeQuantityFromCart
} from './Reducer/cartReducer';

import productReducer from './Reducer/productReducer';

import wishListReducer , {
    addItemToWishlist,
    removeItemFromWishlist,
} from './Reducer/wishListReducer';

                                        // function combineReducers(reducers) {
                                        //     const reducerKeys = Object.keys(reducers)
                                        
                                        //     return function (state = {}, action) {
                                        //     const nextState = {}
                                            
                                        //     for (let i = 0; i < reducerKeys.length; i++) {
                                        //         const key = reducerKeys[i]
                                        //         const reducer = reducers[key]
                                        //         const previousStateForKey = state[key]
                                        //         const nextStateForKey = reducer(previousStateForKey, action)
                                        //         nextState[key] = nextStateForKey
                                        //     }
                                        
                                        //     return nextState
                                        //     }
                                        // }

function combineReducers(reducers) {
                                        
    return function (state = {}, action) {
        const nextState = {}

        for (let [key , value] of Object.entries(reducers)) {
        const reducer = value
        const previousStateForKey = state[key]
        const nextStateForKey = reducer(previousStateForKey, action)
        nextState[key] = nextStateForKey
        }
                                            
        return nextState
    }
}
  

const rootReducer = combineReducers({
    products : productReducer,
    cart : cartReducer,
    wishList : wishListReducer,
})

//in the above code we have told redux that main state(state of the application) will be like the above object i.e., on prodtucts key state given by productReducer will present, and on cart key state given by cartReducer will be present and so on 

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(addItemToCart(1));
store.dispatch(addItemToCart(2));
store.dispatch(addItemToCart(3));
store.dispatch(addItemToCart(4));
store.dispatch(addItemToCart(5));

store.dispatch(removeItemFromCart(2));

store.dispatch(addQuantityToCart(2));

store.dispatch(removeQuantityFromCart(2));

store.dispatch(addItemToWishlist(2));

store.dispatch(addItemToWishlist(1));

store.dispatch(removeItemFromWishlist(1));



