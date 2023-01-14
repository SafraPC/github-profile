import React from 'react';
import { searchController } from './Search.controller';
import { SearchScreen } from './Search.screen';

const Search: React.FC = () => {
   const { getUser } = searchController();
   return <SearchScreen getUser={getUser} />;
};

export { Search };
