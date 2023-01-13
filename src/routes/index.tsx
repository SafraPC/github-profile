import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/screens/Home';

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Router>
   );
};
export { AppRoutes };
