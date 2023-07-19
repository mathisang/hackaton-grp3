import PropTypes from 'prop-types';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AppIcon, AppLink } from '../../components';
import { useLocation } from 'react-router';
import { PROP_TYPE_LINK_ITEM } from '../utils';

/**
 * Renders Navigation Item for SideBar, detects current url and sets selected state if needed
 * @component SideBarNavItem
 */
const SideBarNavItem = ({ openInNewTab, icon, path, selected: propSelected = false, subtitle, title, onClick }) => {
  const location = useLocation();
  console.log(location.pathname, path)
  const selected = propSelected || (path && path.length > 1 && location.pathname.startsWith(path)) || (path === '/' && location.pathname === '/') ||  false;

  return (
    <ListItemButton
      component={AppLink}
      selected={selected}
      to={path}
      href="" // Hard reset for .href property, otherwise links are always opened in new tab :(
      openInNewTab={openInNewTab}
      onClick={onClick}
      sx={{
          padding: 3,
          borderRadius: '30px 0 0 30px',
          '&.Mui-selected': {
            color: 'primary.main',
            fontWeight: 'bold',
            background: '#F3F3F3',
            '& .MuiListItemIcon-root': {
                color: 'primary.main',
            },
            }
      }}
    >
      <ListItemIcon>{icon && <AppIcon icon={icon} />}</ListItemIcon>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItemButton>
  );
};

SideBarNavItem.propTypes = {
  ...PROP_TYPE_LINK_ITEM,
  openInNewTab: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SideBarNavItem;
