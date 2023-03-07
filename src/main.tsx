import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import '@/styles/config.css'
import { Provider } from 'react-redux'
import AppStore from '@/redux/store'
import { AxiosInterceptor } from './interceptors/axios.interceptor'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilitiesConfigurator } from './utilities'

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={AppStore}>
    <SnackbarProvider>
      <CssBaseline />
      <SnackbarUtilitiesConfigurator/>
      <AppRouter />
    </SnackbarProvider>
  </Provider>,
)
