import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CardCourse = ({course}) => {
   return <Card sx={{display: 'flex', borderRadius: '11px', boxShadow: '3px 4px 6px 0px #00000012'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>                
                <CardMedia
                    component="img"
                    sx={{ width: 75, height: 75, borderRadius: '6px' }}
                    image="/assets/images/images.png"
                    alt="Image de cours"
                />
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography sx={{ fontWeight: 'medium', fontSize: 18, marginBottom: '5px' }}>
                            Cours de React
                        </Typography>
                        <Typography sx={{ fontWeight: 'light', fontSize: 13, marginBottom: '10px' }}>
                            Développeur Web
                        </Typography>
                        <Typography sx={{ fontWeight: 'regular', fontSize: 13 }}>
                            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px'}}> 
                <Button color={'info'} variant="text">
                    <ThumbUpOffAltIcon sx={{marginRight: '5px'}}/>
                    <Typography sx={{ fontWeight: 'light', fontSize: 14}}>
                        10K
                    </Typography>
                </Button>
                <Button color={'secondary'} variant="text">
                    <BookmarkIcon sx={{marginRight: '5px'}}/>
                    <Typography sx={{ fontWeight: 'light', fontSize: 14}}>
                        10K
                    </Typography>
                </Button>
            </Box>
        </Box>
    </Card>
}

export default CardCourse;