import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../../api/courses";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from "react-markdown";

const Course = () => {
    const { id } = useParams();

    const [course, setCourse] = useState(null);
    useEffect(() => {
        getCourse(id).then((response) => {
            setCourse(response);
        });
    }, []);


    const returnDate = (date) => {
        const newDate = new Date(date);
        return newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
    }

    const showCourse = () => {
        if (!course) {
            return <div>Chargement...</div>
        }
        return (
            <Box sx={{display: 'flex', 
                flexDirection: 'column',
                borderRadius: '11px', 
                boxShadow: '3px 4px 6px 0px #00000012',
                backgroundColor: 'white',
                padding: '40px'
                }}
            >
                <ArrowBackIcon sx={{cursor: 'pointer', marginBottom: '20px'}} onClick={() => window.history.back()} color={'primary'} fontSize='large'/>

                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{fontSize: '40px', fontWeight: 'medium'}}>{course.attributes.name}</Typography>  
                    <Typography sx={{fontSize: '20px', fontWeight: 'regular'}}>{returnDate(course.attributes.publishedAt)}</Typography>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'end', marginBottom: '30px' }}>
                    <Box component={"img"} src={
                        'http://localhost:1337' + course.attributes.ownerId?.data?.attributes?.picture?.data?.attributes?.url
                    }
                    sx={{width: '100px', height: '100', borderRadius: '30px'}}/>
                    <Typography sx={{fontSize: '20px', fontWeight: 'regular'}}>{course.attributes.ownerId?.data?.attributes.username}</Typography>  
                </Box>  


                <Typography sx={{ marginBottom: '30px' }}>
                    {course.attributes.description}
                </Typography>
                
                <Divider variant="middle" />
                
                <Box sx={{borderRadius: '30px'}}>
                    <ReactMarkdown>{course.attributes.content}</ReactMarkdown>
                </Box>
            </Box>
        );
    }
    
    return showCourse();
    
};

export default Course;