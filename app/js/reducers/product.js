import { GET_PRODUCTS, GET_PRODUCT } from '../actions/products';

const initialProductState = {
    products: {},
    selectedProduct: {}
}

const product = (state = initialProductState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {...state, products: action.products}

        case GET_PRODUCT:
            const selectedProduct = state.products.find((p) => 
                p.id === action.id
            )
            return {...state, selectedProduct: selectedProduct}

        default:
            return state;
    }
}

export default product;