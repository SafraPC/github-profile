import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { UserInfoDTO } from 'src/screens/Login/application/Login.dto';
import { RepositoriesDTO } from 'src/screens/Search/application/Search.dto';

export interface HistoryData {
   user: string;
   userData?: UserInfoDTO;
   data: RepositoriesDTO[];
   success: boolean;
   time: Date;
}

interface RepositoriesHistoryProps {
   history: HistoryData[];
   setHistory: (user: HistoryData[]) => void;
}
export const HistoryContext = createContext<RepositoriesHistoryProps>(
   {} as RepositoriesHistoryProps
);

const HistoryProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const storedHistory = JSON.parse(localStorage.getItem('history') || '[]');
   console.log(storedHistory);
   const [history, setHistory] = useState(storedHistory as HistoryData[]);

   useEffect(() => {
      localStorage.setItem('history', JSON.stringify(history));
   }, [history]);

   return (
      <HistoryContext.Provider value={{ history, setHistory }}>
         {children}
      </HistoryContext.Provider>
   );
};

export { HistoryProvider };
