import React from 'react'
import {
    Drawer, List, SvgIcon, ListItem, withStyles,
    ListItemIcon, ListItemText, makeStyles, Typography, CardHeader
} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const menuList = [
    {
        id: 1,
        name: 'Dashboard',
        image: <HomeIcon />
    },
    {
        id: 2,
        name: 'Orders',
        image: <ListAltIcon />
    },
    {
        id: 3,
        name: 'Products',
        image: <LocalMallOutlinedIcon />
    },
    {
        id: 4,
        name: 'Customers',
        image: <AccountCircleOutlinedIcon />
    },
    {
        id: 5,
        name: 'Messages',
        image: <SmsOutlinedIcon />
    },
    {
        id: 6,
        name: 'Settings',
        image: <SettingsOutlinedIcon />
    }
]

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
}

const drawerWidth = 220;

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-root': {
                color: theme.palette.common.white,
            },
        },
    },
}))(ListItem);

const menuStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    body: {
        display: 'flex',
        padding: 15, 
    },
    text: {
        color: '#007aff',
        display: 'inline',
        paddingRight: 0,
        fontWeight: 700,
    },
    text1: {
        color: '#24ccb8',
        display: 'inline',
        fontWeight: 700,
        paddingLeft: 1,
    }
}));

function SideMenu() {

    const style = menuStyle();

    return (
        <div>
            <Drawer className={style.drawer} variant="permanent"
                classes={{ paper: style.drawerPaper }} anchor="left">

                <Typography className={style.body}>
                    <Typography variant="h4" className={style.text}>
                        Big
                    </Typography>
                    <Typography variant="h4" className={style.text1}>
                        Bazzar
                    </Typography>
                </Typography>

                <List button>
                    {menuList.map((menu) => (
                        <StyledMenuItem key={menu.id}>
                            <ListItemIcon>
                                {menu.image}
                            </ListItemIcon>
                            <ListItemText>
                                {menu.name}
                            </ListItemText>
                        </StyledMenuItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}

export default SideMenu