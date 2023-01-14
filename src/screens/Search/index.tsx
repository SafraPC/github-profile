import React from 'react';
import { searchController } from './Search.controller';
import { SearchScreen } from './Search.screen';

const Login: React.FC = () => {
   const { getUser } = searchController();
   return <SearchScreen getUser={getUser} />;
};

export default Login;
