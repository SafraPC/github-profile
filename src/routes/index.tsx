import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/screens/Login';
import { Search } from 'src/screens/Search';

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
         </Routes>
      </Router>
   );
};
export { AppRoutes };
