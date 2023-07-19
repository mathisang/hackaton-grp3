import { Box, Card, Typography } from "@mui/material";
import user from '../../assets/user.png';
import AppButton from "../AppButton";


const CardCourseList = ({title, description, autor}) => {
   return <Card sx={{display: 'flex', borderRadius: '30px', boxShadow: '3px 4px 6px 0px #00000012', width: '635px'}}>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', padding: '15px 50px', gap: '20px'}}>
            <Typography sx={{ fontWeight: 'medium', fontSize: 18 }}>
                {title}
            </Typography>

            <Typography sx={{ fontWeight: 'regular', fontSize: 13 }}>
                {description}
            </Typography>

            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                    <Box component="img" src={user} alt="header" sx={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%'
                    }}/>

                    <Typography sx={{ fontWeight: 'regular', fontSize: 11, verticalAlign: '10px' }}>
                        {autor}
                    </Typography>
                </Box>

                <AppButton variant="outlined">
                    Voir le cours
                </AppButton>
            </Box>
        </Box>
    </Card>
}

export default CardCourseList;