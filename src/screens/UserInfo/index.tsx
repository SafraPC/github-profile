import React from 'react';
import { userInfoController } from './UserInfo.controller';
import { UserInfoScreen } from './UserInfo.Screen';

const UserInfo: React.FC = () => {
   const { user, handleChangeUser } = userInfoController();
   return <UserInfoScreen user={user} handleChangeUser={handleChangeUser} />;
};

export default UserInfo;
