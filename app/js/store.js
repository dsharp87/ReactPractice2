import { createStore } from 'redux';
import name from './reducers/name';

const store = createStore(name);

export default store;