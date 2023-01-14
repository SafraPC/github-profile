import React from 'react';
import { searchController } from './Search.controller';
import { SearchScreen } from './Search.screen';

const Search: React.FC = () => {
   const { getRepositories, loading, isHistoryEnabled } = searchController();
   return (
      <SearchScreen
         getRepositories={getRepositories}
         loading={loading}
         isHistoryEnabled={isHistoryEnabled}
      />
   );
};

export { Search };
