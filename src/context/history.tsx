import React, { createContext } from 'react';
import { useState } from 'react';
import { RepositoriesDTO } from 'src/screens/Search/application/Search.dto';

interface RepositoriesHistoryProps {
   history: RepositoriesDTO[];
   setHistory: (user: RepositoriesDTO[]) => void;
}
export const HistoryContext = createContext<RepositoriesHistoryProps>(
   {} as RepositoriesHistoryProps
);

const HistoryProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const [history, setHistory] = useState([] as RepositoriesDTO[]);

   return (
      <HistoryContext.Provider value={{ history, setHistory }}>
         {children}
      </HistoryContext.Provider>
   );
};

export { HistoryProvider };
