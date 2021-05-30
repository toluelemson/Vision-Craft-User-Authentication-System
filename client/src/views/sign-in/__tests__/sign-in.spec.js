import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SignIn from '../SignInScreen'
import renderWithProviders from '../../../utils/renderWithProviders'

afterEach(cleanup)

it('renders SignIn screen without crashing', () => {
  renderWithProviders(<><BrowserRouter><SignIn /></BrowserRouter></>)
})

it('update on onChange state on input form', () => {
  renderWithProviders(
    <><BrowserRouter><SignIn /></BrowserRouter></>,
  )
})

const setup = (placeholder, value) => {
  const { getByPlaceholderText } = renderWithProviders(
    <><BrowserRouter><SignIn /></BrowserRouter></>,
  )
  const input = getByPlaceholderText(placeholder)
  fireEvent.change(input, { target: { value } })
  return input.value
}

it('Test Email Input', () => {
  const value = setup('Email', 'tafadzwalnyamukapa@gmail.com')
  expect(value).toBe('tafadzwalnyamukapa@gmail.com')
})

it('Signin with button is present in the document', () => {
  const { getByText } = renderWithProviders(
    <>
      <BrowserRouter>
        <>
          {' '}
          <SignIn />
          {' '}
        </>
      </BrowserRouter>
    </>,
  )
  const submitButton = getByText('Sign In')
  expect(submitButton).toBeInTheDocument()
})
