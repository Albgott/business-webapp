import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import '@/styles/config.css'
import { Provider } from 'react-redux'
import AppStore from '@/redux/store'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={AppStore}>
    <CssBaseline />
    <AppRouter />
  </Provider>,
)
