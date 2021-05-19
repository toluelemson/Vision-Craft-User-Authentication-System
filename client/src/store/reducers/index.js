import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './user.reducer';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,

});
