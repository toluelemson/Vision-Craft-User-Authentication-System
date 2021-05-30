import { combineReducers } from 'redux'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './store/Auth/reducers/authReducer'

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
})
