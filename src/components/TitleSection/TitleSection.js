import { Stack, Typography } from '@mui/material';
import { APP_SECTION_VARIANT } from '../config';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component TitleSection
 * @param {string} [title]
 * @param {boolean} [arrow]
 */
const TitleSection = ({ variant = APP_SECTION_VARIANT, title = 'Missing title...', arrow = false }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={6} sx={{marginBottom: '16px'}}>
      <Typography variant="h4" component="h2" color={'#000000'} fontWeight={600}>
        { title }
      </Typography>
      {
        arrow === true && (<ArrowForwardIcon color={'primary'} fontSize='large' />)
      }
    </Stack>
  );
};

export default TitleSection;
