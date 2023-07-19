import { Autocomplete, Box } from "@mui/material";

const SearchCourse = ({ search, setSearch }) => {

    const courses = [
        { title: 'Violon' },
        { title: 'Flutte' },
        { title: 'Guitare' },
        { title: 'piano' }
    ];

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', boxShadow: '3px 4px 6px 0px #00000012'}}>
            <Autocomplete 
            freeSolo
            renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  options={courses.map((option) => option.title)}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )} />
        </Box>
    )
};

export default SearchCourse;