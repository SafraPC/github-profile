import { Avatar, Center, Container, Link } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import NotFound from 'src/components/NotFound';
import { Page } from 'src/components/Page/intex';
import { RepoCard } from 'src/components/RepoCard';
import { HistoryContext } from 'src/context/history';
import { Label } from './Info.styles';

const InfoScreen: React.FC = () => {
   const { history } = useContext(HistoryContext);
   const { id } = useParams();
   const navigate = useNavigate();
   const user = history.find(
      item => item.user.toLowerCase() === id?.toLowerCase()
   );

   const userIndex = history.findIndex(item => item === user);

   const goToUserInfo = () => [navigate(`/user/${userIndex}`)];

   return (
      <Page backButton searchAnother>
         <Container height="100%" p={4}>
            <Center flexDirection="column">
               <Avatar
                  zIndex={-1}
                  marginBottom={4}
                  src={user?.userData?.avatar_url}
                  w={55}
                  h={55}
               />
               <Label>
                  Buscando dados de
                  <Link as="b" onClick={goToUserInfo}>
                     {' '}
                     {user?.userData?.login || id}
                  </Link>
               </Label>
               <Label>Total encontrados: {user?.data?.length || 0}</Label>
            </Center>

            {user?.data ? (
               user.data.map(item => (
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
            ) : (
               <NotFound text="Nenhum repositório encontrado!" />
            )}
         </Container>
      </Page>
   );
};

export { InfoScreen };
