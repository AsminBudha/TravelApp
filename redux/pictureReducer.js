import * as actionTypes from './actionTypes';

export default pictureReducer = (state = { pictures: {} }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ALL_PICTURES:
      const newState = Object.assign({}, state, {
        pictures: action.payload
      });
      return newState;
    default:
      return state;
  }
};
