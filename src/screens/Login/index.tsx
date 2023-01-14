import React from 'react';
import { homeController } from './Login.controller';
import { LoginScreen } from './Login.screen';

const Login: React.FC = () => {
   const { getUser, loading } = homeController();
   return <LoginScreen getUser={getUser} loading={loading} />;
};

export default Login;
