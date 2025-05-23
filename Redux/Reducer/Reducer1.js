import productsList from '../products';

let initialState = {
    products: productsList,
    cart : [],
    wishList : []
}

const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM  = 'post/removeItem';
const CART_ADD_QUANTITY = 'post/addQuantity';
const CART_SUBTRACT_QUANTITY = 'post/subtractQuantity';
const WISHLIST_ADD_ITEM = 'wishlost/addItem';
const WISHLIST_REMOVE_ITEM = 'wishlist/subtractItem';

export default function reducer(state = initialState, action) {
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
                            return { 
                                ...items, 
                                quantity : items.quantity - 1,
                            } 
                        }
                        return items;
                    })
                    .filter((products) => products.quantity > 0)
                }

            case WISHLIST_ADD_ITEM : 
                const item = action.payload;
                const exist = state.wishList.find((product) => product.productId === item.productId);

                if(exist) return state;
                else {
                    return {
                        ...state,
                        wishList : [...state.wishList, item]
                    }
                }

            case WISHLIST_REMOVE_ITEM :
                return {
                    ...state,
                    wishList : state.wishList.filter((prod) => prod.productId !== action.payload.productId),
                }

        default : return state;
    }
}
