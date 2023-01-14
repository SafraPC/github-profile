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
      try {
         setLoading(true);
         if (
            history.find(
               item => item.user.toLowerCase() === username.toLowerCase()
            )
         ) {
            navigate(`/search/${username}`);
            return;
         }
         const response = await requestRepositories(username);

         if (response.error) {
            toast.error(response.message, TOAST_OPTIONS);
            return;
         }
         if (response.data) {
            setHistory([
               ...history,
               {
                  user: username,
                  data: response.data,
               },
            ]);
            navigate(`/search/${username}`);
         }
      } finally {
         setLoading(false);
      }
   };
   return {
      getRepositories,
      loading,
      isHistoryEnabled,
   };
};

export { searchController };
