import { combineReducers } from 'redux';
import token from './token-reducer';
import dashboard from './dashboard-reducer';

export default combineReducers({ token, dashboard });
