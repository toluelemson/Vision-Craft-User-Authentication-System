import { BrowserRouter } from 'react-router-dom'
import Charts from '../Deposits'
import renderWithProviders from '../../../utils/renderWithProviders'

it('renders Charts component without crashing', () => {
  renderWithProviders(<><BrowserRouter><Charts /></BrowserRouter></>)
})
