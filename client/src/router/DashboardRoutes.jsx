import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainScreenLayout from '../Layout/MainScreenLayout';


const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainScreenLayout />}>
    
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
