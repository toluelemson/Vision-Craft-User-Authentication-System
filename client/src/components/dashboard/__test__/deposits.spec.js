import { BrowserRouter } from 'react-router-dom'
import Deposits from '../Deposits'
import renderWithProviders from '../../../utils/renderWithProviders'

it('renders Deposit component without crashing', () => {
  renderWithProviders(<><BrowserRouter><Deposits /></BrowserRouter></>)
})
