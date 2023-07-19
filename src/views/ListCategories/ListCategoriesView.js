import { Stack, Box } from '@mui/material';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { SubjectCard } from '../../components/SubjectCard';
import { useEffect, useState } from 'react';
import api from '../../api';

/**
 * Renders Home page/view
 */
const ListCategoriesView = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.axios.get('/categories').then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <Stack direction="column" spacing={6} sx={{ width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px' }}>
      <Header />

      <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
        {categories && categories.map((categorie, index) => {
          return (
            <SubjectCard key={index} id={categorie.id} name={categorie.attributes.name} />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ListCategoriesView;
