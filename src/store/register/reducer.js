import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';

const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
