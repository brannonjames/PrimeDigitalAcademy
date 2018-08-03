import { combineReducers } from 'redux';
import feedback from './feedback';
import admin from './admin';

export default combineReducers({
  feedback,
  admin
});