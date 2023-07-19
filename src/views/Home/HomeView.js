import { Stack, Box } from '@mui/material';
import { SubjectCard } from '../../components/SubjectCard';
import { CardCourse } from '../../components/CardCourse';
import { TitleSection } from '../../components/TitleSection';
import { DateHeader } from '../../components/DateHeader';
import { SearchBar } from '../../components/SearchBar';

/**
 * Renders Home page/view
 */
const HomeView = () => {
  return (
    <Stack direction='column' spacing={6} sx={{width: '100%', overflow: 'hidden', padding: '32px'}}>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} spacing={8} >
        <SearchBar />
        <DateHeader />
      </Stack>
      <Box>
        <TitleSection title={'Sujets'} arrow={true} />
        <Stack direction="row" spacing={4} sx={{overflow: 'auto'}}>
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </Stack>
      </Box>

      <Box>
        <TitleSection title={'Top cours'} />
        <Stack direction="column" spacing={2} sx={{paddingRight: '32px'}}>
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </Stack>  
      </Box>
    </Stack>
  );
};

export default HomeView;
