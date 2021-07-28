import { GET_PRODUCTS, GET_CATEGORIES } from "../constants/action-types";

const initialState = {
    products: [],
    productCategories: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {
                products: state.products.concat(action.payload)
            });

        case GET_CATEGORIES:
            return Object.assign({}, state, {
                productCategories: state.productCategories.concat(action.payload)
            });

        default:
            return state;
    }
};

export default rootReducer;
