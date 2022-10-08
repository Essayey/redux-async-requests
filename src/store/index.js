import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './postReducer';

export const store = createStore(postReducer, applyMiddleware(thunk));

