import React from 'react';
import { homeController } from './Login.controller';
import { HomeScreen } from './Login.screen';

const Home: React.FC = () => {
   const { getUser, loading } = homeController();
   return <HomeScreen getUser={getUser} loading={loading} />;
};

export default Home;
