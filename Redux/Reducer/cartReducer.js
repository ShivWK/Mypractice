
let initialState = {
    cart : []   
}

export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM  = 'post/removeItem';
export const CART_ADD_QUANTITY = 'post/addQuantity';
export const CART_SUBTRACT_QUANTITY = 'post/subtractQuantity'; //these vars are called action types

export default function cartReducer(state = initialState, action) {
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
                    cart : state.cart.map((items) => items.productId === action.payload.productId
                    ? {...items, quantity : items.quantity + 1}
                    : items
                    //item.quantity += action.payload.quantity //this is mutating the object it is wrong
             // In react we dont use pre or post increment or decrement because they mutate the property instead use simply + 1
                )
            }

            case CART_SUBTRACT_QUANTITY  :
                return { ...state,
                        cart : state.cart.map((items) => items.productId === action.payload.productId 
                        ? {...items, quantity : items.quantity - 1}  
                        : items,
                    )
                    .filter((products) => products.quantity > 0)
                }

            default : 
                return state;
    }
}

//If you only returned { cart: ... } without ...state, and you later added another property to the state, such as wishlist, that property would be removed whenever the cart is updated.

//In Redux, the state should be immutable. This means that when you update the state, you should create a new state object rather than directly modifying the existing one.

//Even though your initial state only has a cart array, you still use ...state to maintain the overall structure of the state object.

//Always spread the existing state (...state) in your return statements, ensuring that all other parts of the state remain unchanged.