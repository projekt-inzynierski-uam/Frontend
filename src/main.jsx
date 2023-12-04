import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import App from './App'
import { MantineProvider, createTheme, rem } from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </StrictMode>
)
