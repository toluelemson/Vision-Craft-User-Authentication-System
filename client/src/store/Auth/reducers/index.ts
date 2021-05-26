import { combineReducers } from 'redux'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './auth.reducer'

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
})

export default rootReducer
