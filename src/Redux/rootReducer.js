import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import shoppingReducer from "./shopping/shoppingReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop']
}

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default persistReducer(persistConfig, rootReducer);