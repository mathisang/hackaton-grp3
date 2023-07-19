import { Stack } from '@mui/material';
import { APP_SECTION_VARIANT } from '../config';
import { SearchBar } from '../SearchBar';
import { DateHeader } from '../DateHeader';

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component Header
 */
const Header = ({ variant = APP_SECTION_VARIANT }) => {
  return (
    <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} spacing={8} sx={{paddingRight: '32px'}}>
      <SearchBar />
      <DateHeader />
  </Stack>
  );
};

export default Header;
