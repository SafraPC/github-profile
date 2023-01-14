import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from 'src/context/user';
import { useTheme } from 'styled-components';
import { BackButton } from '../BackButton';
import { Container, Content } from './styles';

interface PageProps {
   children: React.ReactNode;
   totalScreen?: boolean;
   backButton?: boolean;
}

const Page: React.FC<PageProps> = ({ children, totalScreen, backButton }) => {
   const navigate = useNavigate();
   const { user } = useContext(UserContext);
   useEffect(() => {
      if (!user?.login) {
         navigate('/');
      }
   }, [user]);

   const { colors } = useTheme();

   return (
      <Container totalScreen={totalScreen}>
         <Flex
            position="sticky"
            top={0}
            as="header"
            justifyContent={backButton ? 'space-between' : 'flex-end'}
            alignItems="center"
            p={4}
            bgColor={colors.secondary}>
            {backButton && <BackButton />}

            <Box
               as="button"
               display="flex"
               flexDirection="row"
               alignItems="center">
               <Text fontWeight="bold" fontSize="xl">
                  {user?.login || 'nao tem'}
               </Text>
               <Avatar src={user?.avatar_url} marginLeft="5" />
            </Box>
         </Flex>
         <Content>{children}</Content>
      </Container>
   );
};

export { Page };
