import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { FETCHING, COMPLETE_FETCH } from './actionTypes';

const initialState = {
  fetching: false,
  data: ['', [], [], []],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });

    case COMPLETE_FETCH:
      return Object.assign({}, state, {
        fetching: false,
        data: action.data,
      });

    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk, logger));
