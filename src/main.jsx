import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';

import App from './App'
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
