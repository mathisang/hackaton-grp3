import { Route, Routes } from 'react-router-dom';
import { HomeView, CategoryView, UserView, NotFoundView } from '../views';

/**
 * List of routes available only for authenticated users
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/category/*" element={<CategoryView />} />
      <Route path="/user/*" element={<UserView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default PrivateRoutes;
