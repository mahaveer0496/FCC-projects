import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { FETCHING, COMPLETE_FETCH } from './actionTypes';

const initialState = {
  fetching: true,
  data: [],
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

export default createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
