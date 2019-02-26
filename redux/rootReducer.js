import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import thingsToDoReducer from './thingsToDoReducer';
import reviewReducer from './reviewReducer';
import pictureReducer from './pictureReducer';

export default combineReducers({
  locationReducer,
  thingsToDoReducer,
  reviewReducer,
  pictureReducer,
});
