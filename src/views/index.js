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
const CategoryView = () => <NotImplementedView name="Category" />; // Sample of non-implemented View
const UserView = () => <NotImplementedView name="User" />; // Sample of non-implemented View

export { NotFoundView, HomeView, UserView, CategoryView };
