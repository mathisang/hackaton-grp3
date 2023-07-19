import { Route, Routes } from 'react-router-dom';
import AuthView from './Auth';
import LoginRoutes from './Login';

/**
 * Routes for "Auth" flow
 * url: /auth/*
 */
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login/*" element={<LoginRoutes />} />
      <Route path="*" element={<AuthView />} />
    </Routes>
  );
};

export default AuthRoutes;
