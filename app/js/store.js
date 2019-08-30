import { createStore } from 'redux';
import combineReducers from './reducers/reducers'

console.log("about to create store in store.js")
const store = createStore(combineReducers);

export default store;