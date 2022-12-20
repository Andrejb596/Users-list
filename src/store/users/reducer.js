import { types } from './actions';

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
  infoError: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return { ...state, list: action.payload };
    case types.START_LOADING:
      return { ...state, isLoading: true };
    case types.STOP_LOADING:
      return { ...state, isLoading: false };
    case types.ERROR_LOADING:
      return { ...state, isError: true, infoError: action.payload };
    default:
      return state;
  };
};
