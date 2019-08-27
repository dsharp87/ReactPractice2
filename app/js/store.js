import { createStore } from 'redux';
import name from './reducers/name';

console.log("about to create store in store.js")
const store = createStore(name);

export default store;