import { useEffect } from 'react';
import { useAppStore } from '../store';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { api } from '../api';
import { isUserStillLoggedIn } from '../api/auth/utils';
import { useIsAuthenticated } from '../hooks/auth';

/**
 * Renders Application routes depending on Logged or Anonymous users
 * @component AppRoutes
 */
const AppRoutes = () => {
  const [state, dispatch] = useAppStore();
  // const isAuthenticated = state.isAuthenticated; // Variant 1
  const isAuthenticated = useIsAuthenticated(); // Variant 2

  log.info('AppRoutes() - isAuthenticated:', state.isAuthenticated);
  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
