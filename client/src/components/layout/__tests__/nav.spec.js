import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import renderWithProviders from '../../../utils/renderWithProviders'

it('renders Navbar without crashing', () => {
  renderWithProviders(<><BrowserRouter><Footer /></BrowserRouter></>)
})

test('Nav not logged in', () => {
  const { getByText } = renderWithProviders(<><BrowserRouter><Navbar /></BrowserRouter></>, {
    store: { userInfo: null },
  })
  getByText('.....')
})
