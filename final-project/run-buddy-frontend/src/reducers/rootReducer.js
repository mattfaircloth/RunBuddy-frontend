import { authReducer } from './authReducer';
import { currentPositionReducer } from './currentPositionReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: authReducer,
  currentPosition: currentPositionReducer
})

export default rootReducer;
