import {Box, Card, CardContent, CardMedia, Grid, Typography, useTheme} from '@mui/material';
import {AppButton} from "../../components/AppButton";
import cardImage from "../../assets/alumni_card.svg";

const UserView = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={4} justifyContent="center">
            <Card sx={{
                display: 'flex', width: '45vw', borderRadius: '24px', position: 'relative',
                [theme.breakpoints.down('lg')]: {
                    width: '100%',
                }
            }}>
                <CardMedia
                    component="img"
                    sx={{width: '30%', zIndex: 2, borderRadius: '0 24px 24px 0'}}
                    image="https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"
                    alt="eleanor avatar"
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
                            Eleanor de Roybon
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Accédez à votre formation 100% en ligne au bureau, à la maison, en ville, à la montagne...
                            Partout ! Bénéficiez chaque semaine des conseils d'un expert [...]
                        </Typography>
                        <Box gap={4}
                             sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: '0 auto'}}>
                            <AppButton variant="contained" color={"warning"} sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                width: '45%',
                                float: 'right'
                            }}>Contacter</AppButton>
                            <AppButton variant="contained" color={"primary"} sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                width: '45%',
                                float: 'left'
                            }}>Devis</AppButton>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
};

export default UserView;
