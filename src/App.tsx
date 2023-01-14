import React from 'react';
import { AppRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/globalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <ChakraProvider>
            <GlobalStyles />
            <ToastContainer />
            <AppRoutes />
         </ChakraProvider>
      </ThemeProvider>
   );
}

export default App;