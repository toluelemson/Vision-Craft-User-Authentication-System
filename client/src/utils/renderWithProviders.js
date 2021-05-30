import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from '@testing-library/react'
import rootReducer from '../store/Auth/reducers'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function renderWithProviders(ui, { reduxState } = {}) {
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')) : null

  const initialState = { userLogin: { userInfo: userInfoFromStorage } }
  const store = createStore(rootReducer, reduxState || initialState)

  return render(<Provider store={store}>{ui}</Provider>)
}

export default renderWithProviders
