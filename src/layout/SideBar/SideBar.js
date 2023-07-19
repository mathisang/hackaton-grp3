import {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer, Stack} from '@mui/material';
import {AppIconButton} from '../../components';
import {useAppStore} from '../../store/AppStore';
import {useEventLogout, useEventSwitchDarkMode, useIsAuthenticated, useOnMobile} from '../../hooks';
import SideBarNavList from './SideBarNavList';
import {SIDEBAR_WIDTH, TOPBAR_DESKTOP_HEIGHT} from '../config';
import {PROP_TYPE_LINK_ITEM} from '../utils';
import user from '../../assets/user.png';
import headerImage from '../../assets/header_navbar.svg';

/**
 * Renders SideBar with Menu and User details
 * Actually for Authenticated users only, rendered in "Private Layout"
 * @component SideBar
 * @param {string} anchor - 'left' or 'right'
 * @param {array} items - list of objects to render as navigation items
 * @param {boolean} open - the Drawer is visible when true
 * @param {string} variant - variant of the Drawer, one of 'permanent', 'persistent', 'temporary'
 * @param {function} onClose - called when the Drawer is closing
 */
const SideBar = ({anchor, items, open, variant, onClose, ...restOfProps}) => {
    // todo to implement
    // const [state] = useAppStore();
    // const isAuthenticated = state.isAuthenticated; // Variant 1
    const isAuthenticated = useIsAuthenticated(); // Variant 2
    const onMobile = useOnMobile();

    const onSwitchDarkMode = useEventSwitchDarkMode();
    const onLogout = useEventLogout();

    const handleAfterLinkClick = useCallback(
        (event) => {
            if (variant === 'temporary' && typeof onClose === 'function') {
                onClose(event, 'backdropClick');
            }
        },
        [variant, onClose]
    );

    return (
        <Drawer
            anchor={anchor}
            open={open}
            variant={variant}
            PaperProps={{
                sx: {
                    width: SIDEBAR_WIDTH,
                    height: '100%',
                    borderRadius: '0px 0 31px 0',
                },
            }}
            onClose={onClose}
        >
            <Stack
                gap={16}
                sx={{
                    height: '100%',
                }}
                {...restOfProps}
                onClick={handleAfterLinkClick}
            >
                <Stack
                    sx={{
                        marginTop: 0,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '25vh',
                    }}
                >
                    <Box component="img" src={headerImage} alt="header" sx={{
                        position: 'absolute',
                        width: '100%'
                    }}/>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                        zIndex: 1,
                    }}>
                        <Box component="img" src={user} alt="header" sx={{
                            width: '50%',
                            zIndex: 2,
                        }}/>
                        <Box sx={{color: 'white', fontWeight: 'bold', paddingTop: 1}}>@John DOE</Box>
                    </Box>
                </Stack>
                {/*{isAuthenticated && (*/}
                {/*  <>*/}
                {/*    <UserInfo showAvatar />*/}
                {/*    <Divider />*/}
                {/*  </>*/}
                {/*)}*/}

                <SideBarNavList items={items} showIcons/>

                {isAuthenticated && <AppIconButton icon="logout" title="Déconnexion" onClick={onLogout}/>}

            </Stack>
        </Drawer>
    );
};

SideBar.propTypes = {
    anchor: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    open: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape(PROP_TYPE_LINK_ITEM)),
    variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
    onClose: PropTypes.func,
};

export default SideBar;
