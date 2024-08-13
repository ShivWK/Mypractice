import { createStore, combineReducers } from 'redux';

import cartReducer, {
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    CART_ADD_QUANTITY, 
    CART_SUBTRACT_QUANTITY 
} from './Reducer/cartReducer';

import productReducer from './Reducer/productReducer';

import wishListReducer , {
    WISHLIST_ADD_ITEM, 
    WISHLIST_REMOVE_ITEM
} from './Reducer/wishListReducer';

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

store.dispatch({type : CART_ADD_ITEM , payload : {productId : 1, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 2, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 3, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 4, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 5, quantity : 1}});

store.dispatch({type : CART_REMOVE_ITEM , payload : {productId : 2}});

store.dispatch({type : CART_ADD_QUANTITY , payload : {productId : 1}});

store.dispatch({type : CART_SUBTRACT_QUANTITY , payload : {productId : 2}});

store.dispatch({type : WISHLIST_ADD_ITEM , payload : {productId : 2}});

store.dispatch({type : WISHLIST_ADD_ITEM , payload : {productId : 1}});

store.dispatch({type : WISHLIST_REMOVE_ITEM , payload : {productId : 2}});



