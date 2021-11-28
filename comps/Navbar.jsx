import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

export default function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 8,
        },
    }));

    return <>
        <AppBar position="fixed" color='transparent' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Avatar src='/favicon.png' alt='mascota de cafe logo' />
                <Typography variant="h6" component="h1" ml={1}> Mascota de Cafe </Typography>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Link href='/cart' passHref>
                    <Tooltip title='View Cart'>
                        <StyledBadge badgeContent={4} color="primary">
                            <IconButton sx={{
                                backdropFilter: 'invert(7%)',
                                borderRadius: '.5rem',
                            }} aria-label="dark theme">
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </StyledBadge>
                    </Tooltip>
                </Link>

                {theme === 'light'
                    ? <Tooltip title='Switch to Dark Mode'>
                        <IconButton sx={{
                            backdropFilter: 'invert(7%)',
                            borderRadius: '.5rem',
                            marginLeft: '1rem'
                        }} aria-label="dark theme" onClick={() => setTheme('dark')}>
                            <DarkModeOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    : <Tooltip title='Switch to Light Mode'>
                        <IconButton sx={{
                            backdropFilter: 'invert(7%)',
                            borderRadius: '.5rem',
                            marginLeft: '1rem'
                        }} aria-label="light theme" onClick={() => setTheme('light')}>
                            <LightModeOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                }
            </Toolbar>
        </AppBar>
    </>;
}