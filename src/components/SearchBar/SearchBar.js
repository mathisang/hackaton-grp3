import { Box, InputBase } from '@mui/material';
import { APP_SECTION_VARIANT } from '../config';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.12),
  },
  width: '60%',
  height: 'fit-content'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid #D9D9D9',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.33),
  padding: theme.spacing(2),
  paddingLeft: `calc(1em + ${theme.spacing(6)})`,
  width: '100%',
}));

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component SearchBar
 */
const SearchBar = ({ variant = APP_SECTION_VARIANT }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color={'primary'} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Rechercher..." inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};

export default SearchBar;
