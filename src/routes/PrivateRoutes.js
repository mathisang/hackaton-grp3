import {Route, Routes} from 'react-router-dom';
import {CategoryView, HomeView, NotFoundView} from '../views';
import ListCourses from "../views/Course/ListCourses";

/**
 * List of routes available only for authenticated users
 * @component PrivateRoutes
 */
const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/category/*" element={<CategoryView/>}/>
            <Route path="/courses" element={<ListCourses />} />
            <Route path="*" element={<NotFoundView/>}/>
        </Routes>
    );
};

export default PrivateRoutes;
