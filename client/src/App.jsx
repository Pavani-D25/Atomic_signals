





import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp_Login_Routes from './router/SignUp_Login_Routes';
import DashboardRoutes from './router/DashboardRoutes';

const App = () => {
  return (
    <Router>
      <SignUp_Login_Routes />
      <DashboardRoutes />
    </Router>
  );
};

export default App;


