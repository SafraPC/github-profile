import { useContext } from 'react';
import { HistoryContext, HistoryData } from 'src/context/history';

export interface HistoryController {
   handleDelete: (user: HistoryData) => void;
   history: HistoryData[];
}

const historyController = (): HistoryController => {
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

   return { handleDelete, history };
};

export { historyController };
