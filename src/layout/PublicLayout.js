import {useCallback, useState} from 'react';
import {Stack} from '@mui/material/';
import {ErrorBoundary} from '../components';
import {useOnMobile} from '../hooks/layout';
import {BOTTOMBAR_DESKTOP_VISIBLE} from './config';
import SideBar from './SideBar';
import BottomBar from './BottomBar';
import {Box} from "@mui/material";

// TODO: change to your app name or other word
const TITLE_PUBLIC = '_TITLE_ app'; // Title for pages without/before authentication

/**
 * SideBar navigation items with links
 */
const SIDEBAR_ITEMS = [
    {
        title: 'Connexion',
        path: '/',
        icon: 'login',
    },
];

/**
 * BottomBar navigation items with links
 */
const BOTTOMBAR_ITEMS = [
    {
        title: 'Connexion',
        path: '/auth/login',
        icon: 'login',
    },
];

/**
 * Renders "Public Layout" composition
 * @component PublicLayout
 */
const PublicLayout = ({children}) => {
    const onMobile = useOnMobile();
    const [sideBarVisible, setSideBarVisible] = useState(true);
    const bottomBarVisible = onMobile || BOTTOMBAR_DESKTOP_VISIBLE;

    // Variant 1 - Sidebar is static on desktop and is a drawer on mobile
    // const sidebarOpen = onMobile ? sideBarVisible : true;
    // const sidebarVariant = onMobile ? 'temporary' : 'persistent';

    // Variant 2 - Sidebar is drawer on mobile and desktop
    const sidebarOpen = sideBarVisible;
    const sidebarVariant = 'persistent';

    const title = TITLE_PUBLIC;
    document.title = title; // Also Update Tab Title

    const onSideBarClose = useCallback(() => {
        if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
    }, [sideBarVisible]);

    // console.log(
    //   'Render using PublicLayout, onMobile:',
    //   onMobile,
    //   'sidebarOpen:',
    //   sidebarOpen,
    //   'sidebarVariant:',
    //   sidebarVariant
    // );

    return (
        <Box
            sx={{
                display: 'flex',
                background: '#F3F3F3',
                minHeight: '100vh', // Full screen height
            }}
        >
            <SideBar
                anchor="left"
                edge="start"
                open={sidebarOpen}
                variant={sidebarVariant}
                items={SIDEBAR_ITEMS}
                onClose={onSideBarClose}
            />

            <Stack
                component="main"
                sx={{
                    flexGrow: 1, // Takes all possible space
                    paddingLeft: sideBarVisible ? 20 : 0,
                    paddingTop: 6
                }}
            >
                <ErrorBoundary name="Content">{children}</ErrorBoundary>
            </Stack>

            <Stack component="footer">{bottomBarVisible && <BottomBar items={BOTTOMBAR_ITEMS}/>}</Stack>
        </Box>
    );
};

export default PublicLayout;
