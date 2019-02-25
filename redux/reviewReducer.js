import * as actionTypes from './actionTypes';

export default reviewReducer = (state = { review: {} }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ALL_REVIEW_BY_THINGS_TO_DO_ID:
      const newState = Object.assign({}, state, {
        review: { ...state.review }
      });
      newState.review[action.payload.id] = action.payload.data;
      return newState;
    default:
      return state;
  }
};
