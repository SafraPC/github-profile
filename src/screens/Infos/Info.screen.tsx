import { Avatar, Box, Center, Container, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Page } from 'src/components/Page/intex';
import { RepoCard } from 'src/components/RepoCard';
import { HistoryContext } from 'src/context/history';
import { Label } from './Info.styles';

const InfoScreen: React.FC = () => {
   console.log('id??? ');
   const { history } = useContext(HistoryContext);
   const { id } = useParams();
   const user = history.find(
      item => item.user.toLowerCase() === id?.toLowerCase()
   );

   return (
      <Page backButton>
         <Container height="100%" p={4}>
            <Center flexDirection="column">
               <Label>Buscando dados de {user?.userData?.login} </Label>
               <Label>Total encontrados: {user?.data?.length || 0}</Label>
               <Avatar
                  zIndex={-1}
                  src={user?.userData?.avatar_url}
                  position="absolute"
                  right={5}
                  w={75}
                  h={75}
               />
            </Center>

            {user?.data
               ? user.data.map(item => (
                    <RepoCard
                       id={id || ''}
                       description={item?.description || '-'}
                       language={item?.language || '-'}
                       lastUpdate={
                          item?.updated_at
                             ? new Date(item?.updated_at)?.toLocaleDateString(
                                  'pt-BR'
                               )
                             : '-'
                       }
                       name={item?.name || '-'}
                       key={item?.description}
                    />
                 ))
               : 'Não há dados para esse usuário'}
         </Container>
      </Page>
   );
};

export { InfoScreen };
