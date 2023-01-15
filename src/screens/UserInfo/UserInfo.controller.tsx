import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { HistoryContext } from 'src/context/history';
import { UserContext } from 'src/context/user';
import { TOAST_OPTIONS } from 'src/styles/globalStyles';
import { UserInfoDTO } from '../Login/application/Home.dto';

export interface UserInfoController {
   user: UserInfoDTO;
   handleChangeUser: () => void;
}

const userInfoController = (): UserInfoController => {
   const { user, setUser } = useContext(UserContext);
   const [selectedUser, setSelectedUser] = useState(user);
   const { history } = useContext(HistoryContext);
   const params = useParams();

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

   useEffect(() => {
      handleSetSelectedUser();
   }, [handleSetSelectedUser]);

   return {
      handleChangeUser,
      user: selectedUser || {},
   };
};

export { userInfoController };
