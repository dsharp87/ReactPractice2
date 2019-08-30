import { combineReducers } from 'redux'

import name from './name'
import product from './product'

export default combineReducers({
    name: name,
    product: product
});