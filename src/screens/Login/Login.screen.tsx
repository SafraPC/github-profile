import { Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { LoginController } from './Login.controller';
import {
   Container,
   Input,
   Label,
   SubmitButton,
   SubmitLabel,
} from './Login.styles';

const LoginScreen: React.FC<LoginController> = ({ getUser, loading }) => {
   const [username, setUsername] = useState('');
   const isButtonEnabled = username.length > 0;

   const submit = () => {
      getUser(username);
   };

   return (
      <Container>
         <Center flexDirection="column">
            <Label>Insira seu usuário do github para continuar!</Label>
            <Input
               placeholder="ex: SafraPC"
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
               }}
            />
            <SubmitButton
               enabled={isButtonEnabled}
               loading={loading}
               onClick={submit}>
               <SubmitLabel>Buscar</SubmitLabel>
            </SubmitButton>
         </Center>
      </Container>
   );
};

export { LoginScreen };
