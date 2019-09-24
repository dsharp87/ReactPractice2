import { createStore } from 'redux';
import combineReducers from './reducers/reducers'
import names from '../../mock-data'
import PRODUCTS from '../../mock-products'

const initialState = {
    name: {
        names: names,
        filterText: '',
        currentProfile: {}
    },
    product: {
        products: PRODUCTS,
        selectedProduct: {}
    }    
}

console.log("about to create store in store.js")
const store = createStore(combineReducers, initialState);

export default store;