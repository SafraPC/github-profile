import React, { createContext } from 'react';
import { useState } from 'react';
import { UserInfoDTO } from 'src/screens/Login/application/Home.dto';

interface UserContextProps {
   user: UserInfoDTO;
   setUser: (user: UserInfoDTO) => void;
}
export const UserContext = createContext<UserContextProps>({
   setUser: () => null,
   user: {},
});

const UserProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const [user, setUser] = useState({});

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider };
