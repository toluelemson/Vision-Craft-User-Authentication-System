import React from 'react'

import { cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Register from '../RegisterScreen'
import renderWithProviders from '../../../utils/renderWithProviders'

afterEach(cleanup)

it('renders Registration Screen without crashing', () => {
  renderWithProviders(<><BrowserRouter><Register /></BrowserRouter></>)
})

it('update on onChange state on input form', () => {
  const { getByPlaceholderText } = renderWithProviders(
    <><BrowserRouter><Register /></BrowserRouter></>,
  )

  const input = getByPlaceholderText('First Name')
  fireEvent.change(input, { target: { value: 'John' } })
  expect(input.value).toBe('John')
})

const setup = (placeholder, value) => {
  const { getByPlaceholderText } = renderWithProviders(
    <><BrowserRouter><Register /></BrowserRouter></>,
  )
  const input = getByPlaceholderText(placeholder)
  fireEvent.change(input, { target: { value } })
  return input.value
}

it('Test Last Name Input', () => {
  const value = setup('Last Name', 'Elemson')
  expect(value).toBe('Elemson')
})

it('Test Email Input', () => {
  const value = setup('Email', 'tafadzwalnyamukapa@gmail.com')
  expect(value).toBe('tafadzwalnyamukapa@gmail.com')
})

it('Signup with button is present in the document', () => {
  const { getByText } = renderWithProviders(
    <>
      <BrowserRouter>
        <>
          {' '}
          <Register />
          {' '}
        </>
      </BrowserRouter>
    </>,
  )
  const submitButton = getByText('SignUp')
  expect(submitButton).toBeInTheDocument()
})
