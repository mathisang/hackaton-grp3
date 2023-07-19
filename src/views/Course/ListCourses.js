import { Box, Typography, Stack, Select, MenuItem, FormControl } from "@mui/material";
import CardCourseList from "../../components/CardCourseList";
import TitleSection from "../../components/TitleSection/TitleSection";
import { Header } from "../../components/Header";
import { useRef, useEffect, useState } from 'react';
import api from "../../api";

const courses = [
    { title: 'Violon' },
    { title: 'Flutte' },
    { title: 'Guitare' },
    { title: 'Piano' }
];

const SearchCourse = ({ }) => {
    return (
        <Box sx={{
            width: 300, 
            display: 'flex', 
            flexDirection: 'row', 
            boxShadow: '3px 4px 6px 0px #00000012',
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '15px 20px',
            alignItems: 'center',
            gap: '20px'
            }}
        >
            <Typography>Trier par :</Typography>
            <FormControl sx={{width: '60%'}} size="small">
                <Select
                    label="Age"
                    >
                    <MenuItem value="">
                        <em>Aucun</em>
                    </MenuItem>
                    {
                        courses.map((course, index) => {
                            return <MenuItem key={index} value={course.title}>{course.title}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
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

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        api.axios.get('/categories').then((response) => {
            setCategories(response)});
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px'
        }}>
            <Header />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <TitleSection title="Liste des cours"/>
                {/* <Typography sx={{ fontWeight: 'regular', fontSize: 16 }}>
                    Thème: Musique
                </Typography> */}
                {/* <SearchCourse /> */}
            </Box>

            <Box sx={{paddingLeft: '50px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                    <TitleSection title="Liste des cours"/>
                    <SearchCourse />
                </Box>

                <div style={{paddingBottom: '200px'}}
                >
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        {
                            listOfCourses.map((course, index) => {
                                return <CardCourseList key={index} title={course.title} description={course.description} autor={course.auteur}/>
                            })
                        }
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default ListCourses;
