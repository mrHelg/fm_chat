import { combineReducers } from 'redux';
import {chatReducer} from './chatReducer'

const rootReducer = combineReducers({
  chat: chatReducer,
  // task: taskReducer,...
});

export default rootReducer;