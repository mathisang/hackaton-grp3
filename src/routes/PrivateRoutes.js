import {Route, Routes} from 'react-router-dom';
import {HomeView, NotFoundView, UserView, ListCategoriesView} from '../views';
import ListCourses from "../views/Course/ListCourses";
import Course from '../views/Course/Course';

/**
 * List of routes available only for authenticated users
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/user/:id*" element={<UserView />} />
            <Route path="/categories" element={<ListCategoriesView/>}/>
            <Route path="/courses/:id" element={<Course />} />
            <Route path=":id/courses" element={<ListCourses />} />
            <Route path="*" element={<NotFoundView/>}/>
        </Routes>
    );
};

export default PrivateRoutes;
