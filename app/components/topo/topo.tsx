import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from 'app/components/menu/menu';
import "./topo.css";
function Topo() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ flexGrow: 1 }} className='topo' >
            <AppBar position="fixed">
                <Toolbar className='bg-primary-color    '>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {!isMobile && (
                        <nav className='menu'>
                            <Menu />
                        </nav>
                    )}
                </Toolbar>
            </AppBar>

            <Toolbar />

            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                classes={{ paper: 'bg-dark' }}
            >
                <Box
                    sx={{ width: 250, p: 2 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}

                >
                    <nav className='menu'>
                        <Menu />
                    </nav>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Topo;
