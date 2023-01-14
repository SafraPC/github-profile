import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { HistoryContext } from 'src/context/history';
import { TOAST_OPTIONS } from 'src/styles/globalStyles';
import { requestRepositories } from './Search.service';

export interface SearchController {
   getRepositories: (username: string) => void;
   loading: boolean;
   isHistoryEnabled: boolean;
}

const searchController = (): SearchController => {
   const [loading, setLoading] = useState(false);
   const { setHistory, history } = useContext(HistoryContext);
   const navigate = useNavigate();
   const isHistoryEnabled = history.length > 0;

   const getRepositories = async (username: string) => {
      setLoading(true);
      const response = await requestRepositories(username);
      setLoading(false);

      if (response.error) {
         toast.error(response.message, TOAST_OPTIONS);
         return;
      }
      if (response.data) {
         console.log(response.data);
         setHistory([...history, response.data]);
         navigate('/search/info');
      }
   };
   return {
      getRepositories,
      loading,
      isHistoryEnabled,
   };
};

export { searchController };
