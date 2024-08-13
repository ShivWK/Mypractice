import product from "../products";

const initialState = {
    products : product,
}

export default function productReducer(state = initialState) {
    return state;
}

//this will set the state in the store when the default action is dispatched by redux