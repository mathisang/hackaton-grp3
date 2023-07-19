import { Stack, Box } from '@mui/material';
import { SubjectCard } from '../../components/SubjectCard';
import { CardCourse } from '../../components/CardCourse';
import { TitleSection } from '../../components/TitleSection';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';

/**
 * Renders Home page/view
 */
const HomeView = () => {
  return (
    <Stack direction="column" spacing={6} sx={{ width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px' }}>
      <Header />
      <Box>
        <Link to="/categories" style={{textDecoration: 'none'}}>
          <TitleSection title={'Sujets'} arrow={true} />
        </Link>
        <Stack direction="row" spacing={4} sx={{ overflow: 'auto' }}>
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </Stack>
      </Box>

      <Box>
        <TitleSection title={'Top cours'} />
        <Stack direction="column" spacing={2} sx={{ paddingRight: '32px' }}>
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </Stack>
      </Box>
    </Stack>
  );
};

export default HomeView;
