import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchJsonp from 'fetch-jsonp';

const FETCHING = 'FETCHING';
const COMPLETE_FETCH = 'COMPLETE_FETCH';

export const fetching = () => ({
  type: FETCHING,
});

export const completeFetch = data => ({
  type: COMPLETE_FETCH,
  data,
});

export const fetchData = () => (dispatch, getState) => {
  dispatch(fetching());
  fetchJsonp('https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=apples&callback=?').then((res) => {
    res.json().then((data) => {
      console.log(data);
      dispatch(completeFetch(data));
    });
  });
};

const reducer = (state = '', action) => {
  switch (action.type) {

    case FETCHING:
      return {
        isFetching: true,
        state,
      };

    case COMPLETE_FETCH:
      return action.data;

    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunk));
