import {Box, Card, CardContent, CardMedia, Grid, Typography, useTheme} from '@mui/material';
import {AppButton} from "../../components/AppButton";
import cardImage from "../../assets/alumni_card.svg";
import Header from "../../components/Header";
import {Stack} from "@mui/material/";
import React, {useEffect, useState} from "react";
import TitleSection from "../../components/TitleSection";
import {getApplicationMessages, getApplications} from "../../api/applications";

const ApplicationsView = () => {
    const theme = useTheme();

    const [selected, setSelected] = useState(null);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        getApplications().then(async (applications) => {
            const newApplications = [];

            for (const application of applications) {
                const messages = await getApplicationMessages(application.id);
                newApplications.push({
                    ...application,
                    attributes: {
                        ...application.attributes,
                        messages
                    }
                })
            }
            setApplications(newApplications)

        });
    }, []);

    return (
        <Stack direction='column' spacing={6} sx={{width: '100%', overflow: 'hidden', padding: '32px 0 32px 32px', position: 'relative'}}>
        <Header />
            <TitleSection title="Demandes & discussions"/>

            <Box container spacing={4} sx={{
            display: 'flex',
            gap: 2
        }}>
            <Stack sx={{
                width: '100%', gap: '16px'
            }}>
                {(applications && applications.length > 0) && applications.map(application => {

                    const {
                        attributes,
                        id
                    } = application

                    const userRequested = attributes.userRequested.data;
                    const userRequestedPicture = userRequested.attributes.picture?.data?.attributes?.url;
                    return <Card sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        position: 'relative',
                        padding: '32px',
                        gap: '32px',
                        cursor: 'pointer',
                        backgroundColor: theme.palette.common.white,
                        boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.25)',
                        borderRadius: '22px',
                    }} onClick={() => setSelected(application)}>
                        <Box sx={{
                            position: 'absolute',
                            background: theme.palette.primary.main,
                            borderRadius: '0 0 15px 15px',
                            color: theme.palette.common.white,
                            padding: '5px 10px',
                            fontWeight: 'bold',
                            right: 0,
                            top: 0,
                            transform: 'translateX(-20%)',
                        }}>
                            {attributes.date}
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'start'}}>
                            <Box component={"img"} src={'http://localhost:1337' + userRequestedPicture}
                                 sx={{width: '35px', height: '35px', borderRadius: '50%'}}/>
                            <Typography sx={{fontSize: 13, marginTop: '10px', fontWeight: 'bold'}}>
                                {userRequested?.attributes.username}
                            </Typography>
                        </Box>
                        <Box dangerouslySetInnerHTML={{__html: attributes.messages?.[0]?.attributes.message}} sx={{width: '100%'}}/>
                    </Card>
                })
                }
            </Stack>
            {/*    {selected && (*/}
            {/*    <Card sx={{*/}
            {/*        width: '50%',*/}
            {/*    }}>*/}
            {/*        <CardContent>*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}
            {/*)}*/}
        </Box>
        </Stack>
    );
};

export default ApplicationsView;
