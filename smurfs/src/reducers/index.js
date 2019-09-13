import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: ""
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        error: ""
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_SMURFS_START:
      return {
        ...state,
        error: ""
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        error: ""
      };
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
