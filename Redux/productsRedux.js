import { createStore } from 'redux';
import productsList from './products'
import myCreateStore from './myCreateStore';

let initialState = {
    products: productsList,
    cart : [],
    wishList : []
}

const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM  = 'post/removeItem';
const CART_ADD_QUANTITY = 'post/addQuantity';
const CART_SUBTRACT_QUANTITY = 'post/subtractQuantity';


function reducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_ITEM  :
            return { ...state,
                cart : [ ...state.cart ,action.payload] //used spread because there can be products in cart previously we cant lose them
            }

            case CART_REMOVE_ITEM  :
            return { ...state,
                cart : state.cart.filter((item) => item.productId !== action.payload.productId)
            }

            case CART_ADD_QUANTITY  :
            return { ...state,
                    cart : state.cart.map((items) => {
                    if(items.productId === action.payload.productId) {
                        //item.quantity += action.payload.quantity //this is mutating the object it is wrong
                        return { 
                            ...items, 
                            quantity : items.quantity + 1
                        } // In react we dont use pre or post increment or decrement because they mutate the property instead use simply + 1
                    }
                    return items;
                })
            }

            case CART_SUBTRACT_QUANTITY  :
                return { ...state,
                        cart : state.cart.map((items) => {
                        if(items.productId === action.payload.productId) {
                            if(items.quantity !== 0) {
                                return { 
                                    ...items, 
                                    quantity : items.quantity - 1,
                                } 
                            }
                        }
                        return items;
                    })
                }

        default : return state;
    }
}

// const actionIncrement = () => {
//     return {
//         type: increament,
//     }
// }

// const actionDecrement = () => {
//     return {
//         type: decrement,
//     }
// }

// const actionIncrementBy = (by) => {
//     return {
//         type: increaseBy,
//         payload: by,
//     }
// }

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({type : CART_ADD_ITEM , payload : {productId : 1, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 2, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 3, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 4, quantity : 1}});
store.dispatch({type : CART_ADD_ITEM , payload : {productId : 5, quantity : 1}});

// store.dispatch({type : CART_REMOVE_ITEM , payload : {productId : 2}});
// store.dispatch({type : CART_REMOVE_ITEM , payload : {productId : 4}});

store.dispatch({type : CART_ADD_QUANTITY , payload : {productId : 1}});

store.dispatch({type : CART_SUBTRACT_QUANTITY , payload : {productId : 2}});

store.dispatch({type : CART_SUBTRACT_QUANTITY , payload : {productId : 2}});


