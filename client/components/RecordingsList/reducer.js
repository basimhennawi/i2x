import { fromJS } from 'immutable';
import {
  FETCH_RECORDINGS,
  FETCH_RECORDINGS_SUCCESS,
  FETCH_RECORDINGS_FAILURE,
} from './constants';

const listInitialState = fromJS({
  status: {
    isLoading: false,
    success: false,
    error: null,
  },
  list: [],
});

export default (state = listInitialState, action) => {
  switch (action.type) {
    case FETCH_RECORDINGS:
      return state.mergeIn(['status'], {
        isLoading: true,
        success: false,
        error: null,
      });

    case FETCH_RECORDINGS_SUCCESS:
      return state.mergeIn(['status'], {
        isLoading: false,
        success: true,
      })
      .set('list', fromJS(action.list));

    case FETCH_RECORDINGS_FAILURE:
      return state.mergeIn(['status'], {
        isLoading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
