import { Stack, Typography, Box } from '@mui/material';
import { APP_SECTION_VARIANT } from '../config';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useEffect, useState } from 'react';

/**
 * Renders Application styled "Section" using Material UI Paper and Title components
 * @component DateHeader
 */
const DateHeader = ({ variant = APP_SECTION_VARIANT }) => {

  const [today, setToday] = useState(new Date())

  useEffect(() => {
    setToday(new Date())
  }, [today]);

  return (
    <Stack direction="row" alignItems="center" spacing={2} sx={{color: 'white', background: '#FF3366', width: 'fit-content', padding: '16px 32px', borderRadius: '16px' }}>
        <CalendarMonthIcon fontSize='large' />
        <Box>
            <Typography variant="p" component="p" fontWeight={'600'}>Date du jour</Typography>
            <Typography variant="p" component="p">{ today.toLocaleString() }</Typography>
        </Box>
    </Stack>
  );
};

export default DateHeader;
