import { Stack, Box } from '@mui/material';
import { SubjectCard } from '../../components/SubjectCard';
import { CardCourse } from '../../components/CardCourse';
import { TitleSection } from '../../components/TitleSection';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourses } from '../../api/courses';
import api from '../../api';
/**
 * Renders Home page/view
 */
const HomeView = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCourses({
      pagination: {
        pageSize: 5,
      },
    }).then((data) => setCourses(data ?? []));
  }, []);

  useEffect(() => {
    api.axios.get('/categories').then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <Stack direction="column" spacing={6} sx={{ width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px' }}>
      <Header />
      <Box>
        <Link to="/categories" style={{ textDecoration: 'none' }}>
          <TitleSection title={'Sujets'} arrow={true} />
        </Link>
        <Stack direction="row" spacing={4} sx={{ overflow: 'auto' }}>
          {categories &&
          categories.map((categorie, index) => {
              return <SubjectCard key={index} id={categorie.id} name={categorie.attributes.name} />;
            })}
        </Stack>
      </Box>

      <Box>
        <TitleSection title={'Top cours'} />
        <Stack direction="column" spacing={2} sx={{ paddingRight: '32px' }}>
          {courses &&
          courses.map((course, index) => (
            <CardCourse key={index} course={course} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default HomeView;
