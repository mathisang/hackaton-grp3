import { Box, Typography, Stack, Select, MenuItem, FormControl } from "@mui/material";
import CardCourseList from "../../components/CardCourseList";
import TitleSection from "../../components/TitleSection/TitleSection";
import SearchBar from "../../components/SearchBar";
import DateHeader from "../../components/DateHeader";
import { useEffect, useState } from 'react';
import { getCategories } from "../../api/categories";
import { getCourses } from "../../api/courses";

const SearchCourse = ({ setCategory }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((response) => {
            setCategories(response.data);
        });
    }, []);

    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        setCategory(event.target.value);
    };

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
                    onChange={(event) => {handleChange(event)}}
                    value={value}
                    >
                    <MenuItem value={undefined}>
                        <em>Aucun</em>
                    </MenuItem>
                    {
                        categories && categories.length > 0 && categories.map((category, index) => {
                            return <MenuItem key={index} value={category.id}>{category.attributes.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
};


const ListCourses = () => {
    const [category, setCategory] = useState(undefined);

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        console.log(category);
        getCourses({
            populate: 'ownerId',
            filters: !category ? undefined : {
                category: {
                    id: {
                        $eq: category
                    }
                }
            }
        }).then((response) => {
            setCourses(response.data);
        });
    }, [category]);


    const coursesList = (courses) => {
        if (courses.length === 0) {
            return <Typography>Aucun cours disponible</Typography>;
        }

        return (
            courses.map((course, index) => {
                return <CardCourseList key={index} title={course.attributes.name} description={course.attributes.description} autor={course.attributes.ownerId.data.attributes.username}/>
            })
        );
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px'
        }}>
            <Stack direction='row' justifyContent={'space-between'} alignItems={'center'} spacing={8} sx={{paddingBottom: '32px'}}>
                <SearchBar />
                <DateHeader />
            </Stack>

            <Box sx={{paddingLeft: '50px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                    <TitleSection title="Liste des cours"/>
                    <SearchCourse setCategory={(valeur) => {console.log(valeur); setCategory(valeur)}}/>
                </Box>

                <div style={{paddingBottom: '200px'}}
                >
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        {coursesList(courses)}
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default ListCourses;
