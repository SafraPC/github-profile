import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { UserInfoDTO } from 'src/screens/Login/application/Login.dto';

interface UserContextProps {
   user: UserInfoDTO;
   setUser: (user: UserInfoDTO) => void;
}
export const UserContext = createContext<UserContextProps>(
   {} as UserContextProps
);

const UserProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
   const [user, setUser] = useState(storedUser);

   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
   }, [user]);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider };
