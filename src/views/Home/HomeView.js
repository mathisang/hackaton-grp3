import { Stack, Box, Typography } from '@mui/material';
import { SubjectCard } from '../../components/SubjectCard';
import { CardCourse } from '../../components/CardCourse';
import { TitleSection } from '../../components/TitleSection';
import { Header } from '../../components/Header';
import {useEffect, useState} from "react";
import {getCourses} from "../../api/courses";
import {getCategories} from "../../api/categories";
/**
 * Renders Home page/view
 */
const HomeView = () => {
  const [courses, setCourses] = useState([]);
  const [catgories, setCategories] = useState([]);

  useEffect(() => {
      getCourses({
              pagination: {
                  pageSize: 5
              }
          }
          )
          .then(data => setCourses(data ?? []));


    getCategories().then(({data}) => setCategories(data ?? []));
  }, []);

  
  const listOfCategories = (categories) => {
    if (categories.length === 0) {
      return <Typography>Il n'y a aucun sujet pour le moment.</Typography>;
    }
    return categories.map(category => <SubjectCard title={category.attributes.name} likes={category.attributes.likes}/>);
  }

  return (
    <Stack direction='column' spacing={6} sx={{width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px'}}>
      <Header />
      <Box>
        <TitleSection title={'Sujets'} arrow={true} />
        <Stack direction="row" spacing={4} sx={{overflow: 'auto'}}>
          {listOfCategories(catgories)}
        </Stack>
      </Box>

      <Box>
        <TitleSection title={'Top cours'} />
        <Stack direction="column" spacing={2} sx={{paddingRight: '32px'}}>
          {courses.map(course => <CardCourse course={course} />)}
        </Stack>
      </Box>
    </Stack>
  );
};

export default HomeView;
