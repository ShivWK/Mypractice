let initialState = {
    wishList : []
}

const WISHLIST_ADD_ITEM = 'wishlost/addItem';
const WISHLIST_REMOVE_ITEM = 'wishlist/subtractItem';

export function addItemToWishlist(a) {
    return {
        type : WISHLIST_ADD_ITEM,
        payload : {productId : a}
    }
} 

export function removeItemFromWishlist(a) {
    return {
        type : WISHLIST_REMOVE_ITEM,
        payload : {productId : a}
    }
} 

export default function reducer(state = initialState, action) {

    switch (action.type) {
            case WISHLIST_ADD_ITEM : 
                const item = action.payload;
                const exist = state.wishList.find((product) => product.productId === item.productId);

                if(exist) return state;
                else {
                    return {
                        ...state, //although we dont have any extra key right but stiil we should give ...state to maintain the structure and it future proofs our state update like we if add any new key to initialstate in future then this will maintain that key with update.  
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
