import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer, currentGeoReducer } from './reducers';

const rootReducer = combineReducers({ filterReducer, currentGeoReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
