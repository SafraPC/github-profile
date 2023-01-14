import { Container } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Page } from 'src/components/Page/intex';
import { UserCard } from 'src/components/UserCard';
import { HistoryContext, HistoryData } from 'src/context/history';

const HistoryScreen: React.FC = () => {
   const { history, setHistory } = useContext(HistoryContext);

   const handleDelete = (user: HistoryData) => {
      const userIndex = history.findIndex(item => item === user);
      if (userIndex !== -1) {
         const filteredHistory = history.filter((item, index) => {
            if (index !== userIndex) {
               return item;
            }
         });
         setHistory(filteredHistory);
      }
   };

   return (
      <Page backButton>
         <Container height="100%" p={4}>
            {history.length
               ? history
                    .filter((_item, index) => index <= 20)
                    .map((item, index) => (
                       <UserCard
                          description={
                             item?.userData?.bio || 'Não há descrição'
                          }
                          onDelete={() => handleDelete(item)}
                          repositories={item?.data?.length || 0}
                          name={item?.user}
                          success={item?.success}
                          time={item?.time}
                          key={index?.toString()}
                       />
                    ))
               : 'Não há dados para esse usuário'}
         </Container>
      </Page>
   );
};

export { HistoryScreen };
