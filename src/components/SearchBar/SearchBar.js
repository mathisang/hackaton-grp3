import {Box, InputBase} from '@mui/material';
import {APP_SECTION_VARIANT} from '../config';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from '@mui/material/styles';
import React, {useEffect, useRef, useState} from "react";
import debounce from 'lodash.debounce';
import {getCourses} from "../../api/courses";
import {useNavigate} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: alpha(theme.palette.common.black, 0.07),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.12),
  },
  height: 'fit-content'
}));

const SearchWrapper = styled('div')(({ theme }) => ({
  //only bootom radius
  position: 'relative',
  width: '60%',
  // width: '60%',
}));

const SearchResultsWrapper = styled('div')(({ theme }) => ({
  //only bootom radius
  borderRadius: '0 0 31px 31px',
  bottom: 0,
  transform: 'translateY(100%)',
  width: '100%',
  position: 'absolute',
  paddingLeft: '32px',
  backgroundColor: theme.palette.common.white,
  zIndex: 1,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const fetchSearchResults = () => {
    if(!search || search.length === 0) return setResults([]);

    getCourses({
      "sort": "category.name",
      "filters": {
        "$or": [
          {
            "name": {
              "$containsi": search
            }
          },
          {
            "category": {
              "name": {
                "$containsi": search
              }
            }
          }
        ]
      }
    }).then((data) => setResults(data));
  }

  const debouncedSearch = useRef(debounce((query) => setSearch(query), 500)).current;

  useEffect(() => {
    fetchSearchResults();
  }, [search]);

  // Cleanup the debounced function on component unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <SearchWrapper>
    <Search sx={{
      borderRadius: results.length ? '31px 31px 0 0' : '31px'
    }}>
      <SearchIconWrapper>
        <SearchIcon color={'primary'} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Rechercher..." inputProps={{ 'aria-label': 'search' }} onChange={({target}) => debouncedSearch(target.value)}/>
    </Search>
      {results.length > 0 && (
          <SearchResultsWrapper>
            <Box sx={{padding: '16px'}}>
              {results.map((result) => {
                return (
                  <Box onClick={() => navigate(`/courses/${result.id}`)} sx={{color: 'black', fontWeight: 'bold', fontSize: '1.2em', padding: 1, cursor: 'pointer'}}>
                    #{result.attributes.category.data[0].attributes.name} - {result.attributes.name}
                    </Box>
                )
              })}
            </Box>
          </SearchResultsWrapper>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
