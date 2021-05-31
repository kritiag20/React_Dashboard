import React from 'react';
import {
    makeStyles, withStyles, AppBar, Toolbar,
    IconButton, InputBase, Badge
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

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
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        backgroundColor: '#fff',
    },
    toolbar: {
        padding: 0,
        paddingRight: 20,
    }
}));

const StyleAppBar = withStyles(() => ({
    root: {
        backgroundColor: "#E5E7EB",
    },
}))(AppBar)

const StyleIconButton = withStyles(() => ({
    root: {
        padding: 8,
    },
}))(IconButton)

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
                                <NotificationsNoneIcon style={{ color: '#000', fontSize: 26 }} />
                            </Badge>
                        </StyleIconButton>

                        {/* <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> */}
                    </div>
                </Toolbar>
            </StyleAppBar>

        </div>
    );
}