import {Box, Card, CardContent, CardMedia, Grid, Typography, useTheme} from '@mui/material';
import {AppButton} from "../../components/AppButton";
import cardImage from "../../assets/alumni_card.svg";
import {useEffect, useState} from "react";
import {getCourses} from "../../api/courses";
import CardCourse from "../../components/CardCourse";
import {useParams} from "react-router-dom";
import placeholder from '../../assets/placeholder.jpg';

const UserView = () => {
    const theme = useTheme();
    const { id: ownerId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses({
            filters: !ownerId ? undefined : {
                ownerId: {
                    id: {
                        $eq: ownerId
                    }
                }
            }
        }).then((data) => {
            setCourses(data);
        });
    }, [ownerId]);

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

    const ownerInformations = coursesList(courses)[0]?.props?.course?.attributes?.ownerId?.data?.attributes

    console.log(ownerInformations)
    return (
        <Box container spacing={4} justifyContent="center">
            <Card sx={{
                display: 'flex', width: '45vw', borderRadius: '24px', position: 'relative', margin: 'auto', marginBottom: '20px', maxHeight: '250px',
                [theme.breakpoints.down('lg')]: {
                    width: '100%',
                }
            }}>
                <CardMedia
                    component="img"
                    sx={{width: '30%', zIndex: 2, borderRadius: '0 24px 24px 0'}}
                    image={ownerInformations?.picture?.data?.attributes?.url ? 'http://localhost:1337' + ownerInformations?.picture?.data?.attributes?.url : placeholder}
                    alt={ownerInformations?.username}
                />
                <Box sx={{
                    width: '35%',
                    height: '100%',
                    borderRadius: '24px',
                    position: 'absolute',
                    background: `url(${cardImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                </Box>

                <Box sx={{
                    [theme => theme.breakpoints.up('md')]: {
                        width: '45%',
                        float: 'right'
                    }
                }}
                >
                    <CardContent sx={{flex: '1 0 auto', padding: 6}}>
                        <Typography component="div" variant="h5">
                            { ownerInformations?.username }
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { ownerInformations?.description ?? "Pas de description disponible" }
                        </Typography>
                        <Box gap={4}
                             sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0 auto'}}>
                            <AppButton variant="contained" color={"primary"} sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                float: 'left'
                            }}>Demander de l'aide</AppButton>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
            <div style={{paddingBottom: '200px'}}
            >
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {coursesList(courses)}
                </Box>
            </div>
        </Box>
    );
};

export default UserView;
