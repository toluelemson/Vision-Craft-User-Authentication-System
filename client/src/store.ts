import {
  createStore, applyMiddleware, compose, Store,
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/Auth/reducers'

const userInfoFromStorage = localStorage.getItem('userInfo') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ? JSON.parse(localStorage.getItem('userInfo')!)
  : null

const initialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]

const store: Store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
)

export type RootStore = ReturnType<typeof rootReducer>

export default store
