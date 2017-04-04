import { fromJS } from 'immutable';
import {
  SIGNIN_WITH_EMAIL,
  SIGNIN_WITH_EMAIL_SUCCESS,
  SIGNIN_WITH_EMAIL_FAILURE,
} from './constants';

const signinInitialState = fromJS({
  isLoading: false,
  success: false,
  error: null,
});

export default (state = signinInitialState, action) => {
  switch (action.type) {

    case SIGNIN_WITH_EMAIL:
      return state.merge({
        isLoading: true,
        success: false,
        error: null,
      });

    case SIGNIN_WITH_EMAIL_SUCCESS:
      return state.merge({
        isLoading: false,
        success: true,
      });

    case SIGNIN_WITH_EMAIL_FAILURE:
      return state.merge({
        isLoading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
