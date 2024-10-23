import * as React from 'react';
import {
    AppBar,
    Button,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    Typography,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    IconButton,
    Switch,
    styled,
    FormControlLabel,
    Link,
    Tooltip,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Header.module.css';
import * as config from './config/Header.config';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     */
    window?: () => Window
};

/*
 * Home: My study and work Timeline and My Projects.
 * Portfolio: My CV, Reports and Presentations.
 * Photos: Photos of My Daily Life, Along with My Girlfriend.
*/

/*
 * xs (extra small): 0px to 599.95px
 * sm (small): 600px to 959.95px
 * md (medium): 960px to 1279.95px
 * lg (large): 1280px to 1919.95px
 * xl (extra large): 1920px and above
*/

function Header(props: Props) {
    const { window } = props;
    const [navBarOpen, setNavBarOpen] = React.useState(false);

    const handleNavBar = () => {
        setNavBarOpen((prevState) => !prevState);
    };

    const navBar = (
        <Box onClick={handleNavBar} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {config.logoName}
            </Typography>
            <Divider />
            <List>
                {config.navItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton
                        component={Link}
                        href={item.link}
                        // target='_blank'
                        sx={{ textAlign: 'center' }}
                    >
                        <ListItemText primary={item.page} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', position: "fixed", zIndex: "100" }}>
            <CssBaseline />
            <AppBar component="nav" className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleNavBar}
                        sx={{ 
                            ml: 1,
                        }}
                        className={styles.iconButton}
                    >
                        <MenuIcon sx={{ color: config.fontColor, scale: '1.5', display: 'flex' }}/>
                    </IconButton>
                    {/* TODO */}
                    <Tooltip title={config.toolTips['logo']}>
                        <Button 
                            component={Link} 
                            href="./" 
                            underline="none" 
                            color="inherit" 
                            startIcon={
                                <Avatar 
                                    src={config.logo_path}
                                    alt={config.logoAlt}
                                />
                            }
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                                '&:active': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ ml: 2 }}
                                className={styles.name}
                            >
                                {config.logoName}
                            </Typography>
                        </Button>
                    </Tooltip>
                    <Box sx={{ mr: 2 }} className={styles.navItems}
                    >
                        {config.navItems.map((item, index) => (
                        <Button 
                            key={index} 
                            component={Link}
                            href={item.link ? item.link : undefined}
                            // target="_blank"
                            sx={{ 
                                color: '#fff', textTransform: 'none',
                                fontWeight: '400', fontSize: '1rem'
                            }}
                            className={styles.navItem}
                        >
                            {item.page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={navBarOpen}
                    onClose={handleNavBar}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: config.drawerWidth } }}
                    className={styles.drawer}
                >
                {navBar}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
};

export default Header;