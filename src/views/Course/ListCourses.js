import { Autocomplete, Box, Typography, TextField } from "@mui/material";
import PublicLayout from "../../layout/PublicLayout";
import CardCourseList from "../../components/CardCourseList";
import TitleSection from "../../components/TitleSection/TitleSection";


const courses = [
    { title: 'Violon' },
    { title: 'Flutte' },
    { title: 'Guitare' },
    { title: 'piano' }
];

const SearchCourse = ({ }) => {
    return (
        <Box sx={{width: 300, display: 'flex', flexDirection: 'column', boxShadow: '3px 4px 6px 0px #00000012'}}>
            <Autocomplete
            freeSolo
            disableClearable
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


const ListCourses = () => {
    const listOfCourses = [
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
        {
            title: 'Titre du cours',
            description: 'Description du cours',
            auteur: 'Nicolas Brazzolotto'
        },
    ];


    return (
        <PublicLayout>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <TitleSection title="Liste des cours"/>
                {/* <Typography sx={{ fontWeight: 'regular', fontSize: 16 }}>
                    Thème: Musique
                </Typography> */}
                {/* <SearchCourse /> */}
            </Box>

            <div style={{maxHeight: '90vh', overflow: 'scroll', paddingBottom: '200px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {
                        listOfCourses.map((course, index) => {
                            return <CardCourseList key={index} title={course.title} description={course.description} autor={course.auteur}/>
                        })
                    } 
                </Box>
            </div>
        </PublicLayout>
    )
}

export default ListCourses;