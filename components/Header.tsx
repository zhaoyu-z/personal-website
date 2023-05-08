import * as React from 'react'
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
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import styles from '../styles/Header.module.css'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window
}

const drawerWidth = 240
const navItems = ['Home', 'Portfolio', 'Photos']

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
    const { window } = props
    const [navBarOpen, setNavBarOpen] = React.useState(false)

    const handleNavBar = () => {
        setNavBarOpen((prevState) => !prevState)
    }

    const navBar = (
        <Box onClick={handleNavBar} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" className={styles.logo} sx={{ my: 2 }}>
                Zhaoyu Zhang
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ justifyContent: 'space-around'}}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={handleNavBar}
                    /*
                     * margin-right: 2 spaces (1 space = 8 px)
                     * sm: none (this component will not display in small screens)
                    */
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },
                        ml: 2, textTransform: 'uppercase'}}
                >
                    Zhaoyu Zhang
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
                    {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                        {item}
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
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                {navBar}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    )
}

export default Header