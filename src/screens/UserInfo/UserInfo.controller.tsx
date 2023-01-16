import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { HistoryContext } from 'src/context/history';
import { UserContext } from 'src/context/user';
import { TOAST_OPTIONS } from 'src/styles/globalStyles';
import { UserInfoDTO } from '../Login/application/Login.dto';
import { useNavigate } from 'react-router';
import { requestUser } from '../Login/Login.service';
import { requestRepositories } from '../Search/Search.service';

export interface UserInfoController {
   user: UserInfoDTO;
   handleChangeUser: () => void;
   goToRepositories: () => void;
}

const userInfoController = (): UserInfoController => {
   const { user, setUser } = useContext(UserContext);
   const [selectedUser, setSelectedUser] = useState(user);
   const { history, setHistory } = useContext(HistoryContext);
   const params = useParams();
   const navigate = useNavigate();

   const handleSetSelectedUser = useCallback(() => {
      if (params?.id !== undefined) {
         const findedUser = history[Number(params?.id)]?.userData;
         if (findedUser) {
            setSelectedUser(findedUser);
            return;
         }
      }
   }, [params]);

   const handleChangeUser = () => {
      setUser(selectedUser);
      toast.success('Usuário alterado com sucesso!', TOAST_OPTIONS);
   };

   const goToRepositories = async () => {
      if (!user?.login) {
         return;
      }

      const findedUserByParam = history[Number(params?.id)]?.userData;
      const findedUser = history.find(
         item => item.user === user?.login
      )?.userData;

      const usr = findedUserByParam || findedUser;
      if (usr?.login) {
         navigate(`/search/${usr.login}`);
         return;
      }

      const response = await Promise.all([
         await requestUser(user.login),
         await requestRepositories(user.login),
      ]);

      const userData = response[0];
      const repositoriesData = response[1];

      if (userData.error || repositoriesData.error) {
         toast.error(
            'Não foi possível acessar os repositorios desse usuário',
            TOAST_OPTIONS
         );
         return;
      }

      setHistory([
         {
            user: user.login,
            userData: userData.data,
            data: repositoriesData.data,
            success: true,
            time: new Date(),
         },
         ...history,
      ]);
      navigate(`/search/${user.login}`);
   };

   useEffect(() => {
      handleSetSelectedUser();
   }, [handleSetSelectedUser]);

   return {
      handleChangeUser,
      user: selectedUser || {},
      goToRepositories,
   };
};

export { userInfoController };
