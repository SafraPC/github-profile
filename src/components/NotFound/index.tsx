import { Text } from '@chakra-ui/react';
import React from 'react';

import { Container } from './styles';

interface NotFoundProps {
   text: string;
}
const NotFound: React.FC<NotFoundProps> = ({ text }) => {
   return (
      <Container>
         <Text fontSize="2xl" textAlign="center">
            {text}
         </Text>
      </Container>
   );
};

export default NotFound;
