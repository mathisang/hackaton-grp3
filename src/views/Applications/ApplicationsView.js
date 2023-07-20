import {Box, Card, CardContent, CardMedia, Grid, Typography, useTheme} from '@mui/material';
import {AppButton} from "../../components/AppButton";
import cardImage from "../../assets/alumni_card.svg";

const ApplicationsView = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={4} justifyContent="center">
            <Card>
                <CardContent>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                        <Typography sx={{fontWeight: 'medium', fontSize: 18, marginBottom: '5px'}}>
                            {name}
                        </Typography>
                        <Typography sx={{fontWeight: 'regular', fontSize: 13}}>
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ApplicationsView;
