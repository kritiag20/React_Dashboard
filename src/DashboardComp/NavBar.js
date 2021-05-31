import React from 'react';
import {
    makeStyles, withStyles, AppBar, Toolbar, ListItem, List, Paper,
    IconButton, InputBase, Badge, ListItemAvatar, Avatar, ListItemText
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AvatarImg from '../Images/avatar.jpeg'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fff',
        color: '#6B7280',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6B7280',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: 25,
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    sectionDesktop: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        backgroundColor: '#fff',
        marginRight: 20,
        borderRadius: 5,
    },
    toolbar: {
        padding: 0,
        paddingRight: 20,
    },
    root:{
        width: '20%',
        paddingLeft: 10,
    }
}));

const StyleAppBar = withStyles(() => ({
    root: {
        backgroundColor: "#E5E7EB",
    },
}))(AppBar)

const StyleIconButton = withStyles(() => ({
    root: {
        padding: 10,
    },
}))(IconButton)

const StyleList = withStyles(() => ({
    root: {
        padding: 0,
    },
    body: {
        fontSize: 14,
    }
}))(List)

const StyleListItem = withStyles(() => ({
    root: {
        padding: 0,
    },
}))(ListItem)

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <StyleAppBar elevation={0} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search for…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <StyleIconButton color="inherit">
                            <Badge variant="dot" overlap="circle" color="secondary">
                                <NotificationsNoneIcon style={{ color: '#000', fontSize: 30 }} />
                            </Badge>
                        </StyleIconButton>
                    </div>
                    <Paper className={classes.root}>
                        <StyleList>
                            <StyleListItem>
                                <ListItemAvatar>
                                    <Avatar variant="rounded" src={AvatarImg}>
                                        
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Ismail Hossain" secondary="Seller Account" />
                            </StyleListItem>
                        </StyleList>
                    </Paper>
                </Toolbar>
            </StyleAppBar>

        </div>
    );
}