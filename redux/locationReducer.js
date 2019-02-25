import * as actionTypes from './actionTypes';

export default locationReducer = (state = { location: [] }, action) => {

  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE_LOCATION:
      const newState = Object.assign({}, state, {
        location: state.location.map(item =>
          (action.payload === item.id && { ...item, isFavorite: !item.isFavorite }) || item
        )
      });
      return newState;
    case actionTypes.ADD_LOCATION:
      return Object.assign({}, state, { location: action.payload });
    default:
      return state;
  }
};
