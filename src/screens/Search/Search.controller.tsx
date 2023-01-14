import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { HistoryContext } from 'src/context/history';
import { TOAST_OPTIONS } from 'src/styles/globalStyles';
import { requestUser } from '../Login/Login.service';
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
      const errorObj = {
         user: username,
         data: [],
         success: false,
         time: new Date(),
      };

      try {
         setLoading(true);
         const findedUser = history.find(
            item => item.user.toLowerCase() === username.toLowerCase()
         );
         if (findedUser) {
            setHistory([
               {
                  userData: findedUser.userData,
                  user: username,
                  data: findedUser.data,
                  success: true,
                  time: new Date(),
               },
               ...history,
            ]);
            navigate(`/search/${username}`);
            return;
         }
         const response = await requestRepositories(username);
         const userData = await requestUser(username);

         if (response.error) {
            toast.error(response.message, TOAST_OPTIONS);
            setHistory([errorObj, ...history]);
            return;
         }

         if (userData.error) {
            toast.error(userData.message, TOAST_OPTIONS);
            setHistory([errorObj, ...history]);
            return;
         }

         setHistory([
            {
               userData: userData.data,
               user: username,
               data: response.data,
               success: true,
               time: new Date(),
            },
            ...history,
         ]);
         navigate(`/search/${username}`);
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
