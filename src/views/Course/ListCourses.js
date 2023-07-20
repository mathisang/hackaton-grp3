import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";
import TitleSection from "../../components/TitleSection/TitleSection";
import { useEffect, useState } from 'react';
import { getCategories } from "../../api/categories";
import { getCourses } from "../../api/courses";
import Header from "../../components/Header";
import CardCourse from "../../components/CardCourse";

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
            width: 500,
            display: 'flex',
            flexDirection: 'row',
            boxShadow: '3px 4px 6px 0px #00000012',
            backgroundColor: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            alignItems: 'center',
            gap: '20px'
            }}
        >
            <Typography>Trier par :</Typography>
            <FormControl sx={{width: '80%'}} size="small">
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
        getCourses({
            filters: !category ? undefined : {
                category: {
                    id: {
                        $eq: category
                    }
                }
            }
        }).then((data) => {
            setCourses(data);
        });
    }, [category]);


    const coursesList = (courses) => {
        if (courses.length === 0) {
            return <Typography>Aucun cours disponible</Typography>;
        }

        return (
            courses.map((course, index) => {
                return <CardCourse key={index} course={course}/>
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
            <Header />

            <Box sx={{paddingLeft: '50px', marginTop: '48px'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                    <TitleSection title="Liste des cours"/>
                    <SearchCourse setCategory={(valeur) => setCategory(valeur)}/>
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
