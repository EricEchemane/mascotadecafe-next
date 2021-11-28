import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';

export default function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    return <>
        <AppBar position="fixed" color='transparent' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Avatar src='/favicon.png' alt='mascota de cafe logo' />
                <Typography variant="h6" component="h1" ml={1}> Mascota de Cafe </Typography>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Link href='/cart' passHref>
                    <Tooltip title='View Cart'>
                        <Badge badgeContent={4} color="secondary">
                            <IconButton sx={{
                                backdropFilter: 'invert(7%)',
                                borderRadius: '.3rem',
                            }} aria-label="dark theme">
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Badge>
                    </Tooltip>
                </Link>

                {theme === 'light'
                    ? <Tooltip title='Switch to Dark Mode'>
                        <IconButton sx={{
                            backdropFilter: 'invert(7%)',
                            borderRadius: '.3rem',
                            marginLeft: '1rem'
                        }} aria-label="dark theme" onClick={() => setTheme('dark')}>
                            <DarkModeIcon />
                        </IconButton>
                    </Tooltip>
                    : <Tooltip title='Switch to Light Mode'>
                        <IconButton sx={{
                            backdropFilter: 'invert(7%)',
                            borderRadius: '.3rem',
                            marginLeft: '1rem'
                        }} aria-label="light theme" onClick={() => setTheme('light')}>
                            <LightModeIcon />
                        </IconButton>
                    </Tooltip>
                }
            </Toolbar>
        </AppBar>
    </>;
}