import React from 'react';
import { homeController } from './Home.controller';
import { HomeScreen } from './Home.screen';

const Home: React.FC = () => {
   const { getUser, loading } = homeController();
   return <HomeScreen getUser={getUser} loading={loading} />;
};

export default Home;
