import { Stack, Box } from '@mui/material';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';

/**
 * Renders Home page/view
 */
const CategoryView = () => {
  const { id } = useParams();

  return (
    <Stack direction="column" spacing={6} sx={{ width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px' }}>
      <Header />
      {id}
    </Stack>
  );
};

export default CategoryView;
