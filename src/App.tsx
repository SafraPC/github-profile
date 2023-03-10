import React from 'react';
import { AppRoutes } from './routes';
import 'react-toastify/dist/ReactToastify.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/globalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from './context/user';
import { HistoryProvider } from './context/history';
import { chakraTheme } from './styles/chakraTheme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <ChakraProvider theme={chakraTheme}>
            <ToastContainer />
            <UserProvider>
               <HistoryProvider>
                  <AppRoutes />
               </HistoryProvider>
            </UserProvider>
         </ChakraProvider>
         <GlobalStyles />
      </ThemeProvider>
   );
}

export default App;
