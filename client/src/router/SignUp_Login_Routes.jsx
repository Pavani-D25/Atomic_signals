// src/router/SignUp_Login_Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp_LogIn_Layout from '../Layout/SignUp_LogIn_Layout';
import Register from '../components/Register/Register';
import SignIn from '../components/SignIn/SignIn';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import ResetPassword from '../components/ResetPassword/ResetPassword';

const SignUp_Login_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp_LogIn_Layout />}>
        <Route index element={<Register />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};

export default SignUp_Login_Routes;
