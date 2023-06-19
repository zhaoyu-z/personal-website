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
    useTheme,
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
    onToggleTheme: () => void
    isDarkMode: boolean
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

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#FDB813',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function Header(props: Props) {
    const { window, onToggleTheme, isDarkMode } = props;
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
                {config.navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
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
                                    src={isDarkMode ? config.logo_path_DARKMODE : config.logo_path_LIGHTMODE} 
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
                        {config.navItems.map((item) => (
                        <Button key={item} sx={{ 
                            color: '#fff', textTransform: 'none',
                            fontWeight: '400', fontSize: '1rem'
                        }}>
                            {item}
                        </Button>
                        ))}
                        <Tooltip title={isDarkMode ? config.toolTips['themeToggler_DARKMODE_DESKTOP'] : config.toolTips['themeToggler_LIGHTMODE_DESKTOP']}>
                            <Box>
                                <DarkModeSwitch sx={{ m: 1 }} checked={isDarkMode} onChange={onToggleTheme}/>
                            </Box>
                        </Tooltip>
                    </Box>
                </Toolbar>
                <Toolbar sx={{ alignItems: 'center' }} className={styles.darkModeToggler}
                >
                    <Box>
                        <FormControlLabel
                            control={<DarkModeSwitch sx={{ m: 1 }} checked={isDarkMode} onChange={onToggleTheme}/>}
                            label={
                                <Typography>
                                    {isDarkMode ? config.toolTips['themeToggler_DARKMODE_MOBILE'] : config.toolTips['themeToggler_LIGHTMODE_MOBILE']}
                                </Typography>
                            }
                        />
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