import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { History } from 'src/screens/History';
import { Infos } from 'src/screens/Infos';
import Home from 'src/screens/Login';
import { Search } from 'src/screens/Search';
import UserInfo from 'src/screens/UserInfo';

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/history" element={<History />} />
            <Route path="/search/:id" element={<Infos />} />
            <Route path="/user" element={<UserInfo />} />
            <Route path="/user/:id" element={<UserInfo />} />
         </Routes>
      </Router>
   );
};
export { AppRoutes };
