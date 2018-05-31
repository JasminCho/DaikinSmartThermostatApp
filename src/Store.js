import { createStore } from 'redux';
import rootReducer from './reducers';

let Store = createStore(rootReducer);

export default Store;
