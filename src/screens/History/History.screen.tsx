import { Container } from '@chakra-ui/react';
import React from 'react';
import NotFound from 'src/components/NotFound';
import { Page } from 'src/components/Page/intex';
import { UserCard } from 'src/components/UserCard';
import { HistoryController } from './History.controller';

const HistoryScreen: React.FC<HistoryController> = ({
   handleDelete,
   history,
}) => {
   return (
      <Page backButton>
         <Container height="100%" p={4}>
            {history.length ? (
               history
                  .filter((_item, index) => index <= 20)
                  .map((item, index) => (
                     <UserCard
                        description={item?.userData?.bio || 'Não há descrição'}
                        onDelete={() => handleDelete(item)}
                        repositories={item?.data?.length || 0}
                        name={item?.user}
                        success={item?.success}
                        time={item?.time}
                        key={index?.toString()}
                     />
                  ))
            ) : (
               <NotFound text="Seu histórico está limpo" />
            )}
         </Container>
      </Page>
   );
};

export { HistoryScreen };
