import * as actionTypes from './actionTypes';

export default thingsToDoReducer = (state = { thingsToDo: [] }, action) => {

  switch (action.type) {
    case actionTypes.ADD_THINGS_TO_DO_ALL:
      return Object.assign({}, state, { thingsToDo: action.payload });
    default:
      return state;
  }
};
