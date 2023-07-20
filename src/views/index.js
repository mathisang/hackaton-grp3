import React from 'react';
/**
 * Note: Don't import/export all Views directly, use lazy loading!
 */
import { withSuspense } from '../components';
import NotFoundView from './NotFoundView';
import NotImplementedView from './NotImplementedView';

/**
 * Views/Pages with Lazy Loading
 */
const HomeView = withSuspense(React.lazy(() => import('./Home')));

const UserView = withSuspense(React.lazy(() => import('./User')));

const ListCategoriesView = withSuspense(React.lazy(() => import('./ListCategories')));

// const CategoryView = () => <NotImplementedView name="Category" />; // Sample of non-implemented View

export { NotFoundView, HomeView, UserView, ListCategoriesView };
