import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import thingsToDoReducer from './thingsToDoReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
  locationReducer,
  thingsToDoReducer,
  reviewReducer,
});
