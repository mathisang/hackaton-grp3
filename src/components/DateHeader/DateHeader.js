import { Stack, Typography, Box } from '@mui/material';
import { APP_SECTION_VARIANT } from '../config';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component DateHeader
 */
const DateHeader = ({ variant = APP_SECTION_VARIANT }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{color: 'white', background: '#FF3366', width: 'fit-content', padding: '16px 32px', borderRadius: '16px' }}>
        <CalendarMonthIcon fontSize='large' />
        <Box>
            <Typography variant="p" component="p" fontWeight={'600'}>Date du jour</Typography>
            <Typography variant="p" component="p">12 Février 2021 8:45</Typography>
        </Box>
    </Stack>
  );
};

export default DateHeader;
