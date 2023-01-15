import { extendTheme } from '@chakra-ui/react';
const config = {
   initialColorMode: 'dark',
   useSystemColorMode: false,
};
const chakraTheme = extendTheme({ config });
export { chakraTheme };
