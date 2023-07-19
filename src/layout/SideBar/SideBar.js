import {useCallback} from 'react';
import PropTypes from 'prop-types';
import {Box, Drawer, Stack} from '@mui/material';
import {AppIconButton} from '../../components';
import {useEventLogout, useIsAuthenticated} from '../../hooks';
import SideBarNavList from './SideBarNavList';
import {SIDEBAR_WIDTH} from '../config';
import {PROP_TYPE_LINK_ITEM} from '../utils';
import placeholder from '../../assets/placeholder.jpg';
import devinci from '../../assets/devinci.png';
import headerImage from '../../assets/header_navbar.svg';
import {useAppStore} from "../../store";

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
    const [state] = useAppStore();
    const isAuthenticated = useIsAuthenticated(); // Variant 2
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
                        <Box component="img" src={isAuthenticated ? state?.user?.picture ?? placeholder : devinci} alt="header" sx={{
                            width: '50%',
                            borderRadius: '50%',
                            zIndex: 2,
                        }}/>
                        <Box sx={{color: 'white', fontWeight: 'bold', paddingTop: 1}}>{isAuthenticated ? `@${state?.currentUser?.username}` :  'Bienvenue !'}</Box>
                    </Box>
                </Stack>
                <SideBarNavList items={items} showIcons/>

                {isAuthenticated &&
                    <Box sx={{justifyContent:"center", display: 'flex'}}>
                        <AppIconButton icon="logout" title="Déconnexion" onClick={onLogout}/>
                    </Box>
                }

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
