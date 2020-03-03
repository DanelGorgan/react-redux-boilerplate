import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './userReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  users: userReducer
});

export default rootReducer;
