import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from 'src/context/user';
import { TOAST_OPTIONS } from 'src/styles/globalStyles';
import { requestUser } from './Login.service';

export interface LoginController {
   loading: boolean;
   getUser: (username: string) => void;
}

const homeController = (): LoginController => {
   const [loading, setLoading] = useState(false);
   const { setUser, user } = useContext(UserContext);

   useEffect(() => {
      if (user?.login) {
         navigate('/search');
      }
   }, []);

   const navigate = useNavigate();

   const getUser = async (username: string) => {
      setLoading(true);
      const response = await requestUser(username);
      setLoading(false);

      if (response.error) {
         toast.error(response.message, TOAST_OPTIONS);
         return;
      }
      if (response.data) {
         toast.success(`Entrou como ${response.data.login}`, TOAST_OPTIONS);
         setUser(response.data);
         navigate('/search');
      }
   };

   return {
      loading,
      getUser,
   };
};

export { homeController };
