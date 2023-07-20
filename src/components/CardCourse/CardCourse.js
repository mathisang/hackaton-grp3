import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import placeholder from '../../assets/placeholder.jpg';
import AppButton from "../AppButton";
import {useNavigate} from "react-router-dom";

const CardCourse = ({course}) => {
    const {
        cover,
        likes,
        name,
        description,
        ownerId
    } = course.attributes;

    const ownerPicture = ownerId?.data?.attributes?.picture?.data?.attributes?.url ? 'http://localhost:1337' + ownerId?.data?.attributes?.picture?.data?.attributes?.url : placeholder;
    const navigate = useNavigate();

    return <Card sx={{display: 'flex', borderRadius: '11px', boxShadow: '3px 4px 6px 0px #00000012'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <CardMedia
                    component="img"
                    sx={{width: 75, height: 75, borderRadius: '6px'}}
                    image={cover?.data?.attributes?.url ? 'http://localhost:1337' + cover?.data?.attributes?.url : placeholder}
                    alt="Image de cours"
                />
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography sx={{fontWeight: 'medium', fontSize: 18, marginBottom: '5px'}}>
                            {name}
                        </Typography>
                        <Typography sx={{fontWeight: 'regular', fontSize: 13}}>
                            {description}
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
                            <Box component={"img"} src={ownerPicture}
                                 sx={{width: '35px', height: '35px', borderRadius: '50%'}}/>
                            <Typography sx={{fontWeight: 'light', fontSize: 13, marginTop: '10px'}}>
                                {ownerId?.data?.attributes?.username}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                    <Button color={'info'} variant="text">
                        <ThumbUpOffAltIcon sx={{marginRight: '5px'}}/>
                        <Typography sx={{fontWeight: 'light', fontSize: 14}}>
                            {likes ?? '0'}
                        </Typography>
                    </Button>
                    <Button color={'secondary'} variant="text">
                        <BookmarkIcon sx={{marginRight: '5px'}}/>
                        <Typography sx={{fontWeight: 'light', fontSize: 14}}>
                            {likes ?? '0'}
                        </Typography>
                    </Button>
                </Box>
                <AppButton variant="outlined" onClick={() => navigate(`/courses/${course.id}`)}>
                    Voir le cours
                </AppButton>
            </Box>
        </Box>
    </Card>
}

export default CardCourse;
