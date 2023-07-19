import { Card, CardActions, CardContent, CardMedia, Typography, Button, Box, Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { APP_SECTION_VARIANT } from '../config';

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component SubjectCard
 */
const SubjectCard = ({ variant = APP_SECTION_VARIANT }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia sx={{ height: 150 }} image="/assets/images/subjects/subject1.jpg" title="Subject" />
      <CardContent sx={{ paddingBottom: 0, position: 'relative' }}>
        <Box
          sx={{
            height: '34px',
            width: '34px',
            background: 'white',
            position: 'absolute',
            top: '-17px',
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar alt="Remy Sharp" src="/assets/images/avatar/1.png" sx={{ width: 24, height: 24 }} />
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          Photographie
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">
          <BookmarkIcon />
        </Button>
        <Button size="small">
          <ThumbUpOffAltIcon color={'info'} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default SubjectCard;
