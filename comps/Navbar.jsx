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
import { styled, experimental_sx as sx } from '@mui/material/styles';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';

export default function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);
    const { cartItems } = useContext(ShoppingCartContext);

    const StyledBadge = styled(Badge)(() => ({
        '& .MuiBadge-badge': {
            right: 2,
            top: 8,
        },
    }));

    const StyledIconButton = styled(IconButton)(() => (
        sx({
            backdropFilter: 'invert(7%)',
            borderRadius: '.5rem',
        })
    ));

    return <>
        <AppBar position="fixed" color='transparent' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Link href='/' passHref>
                    <Box display='flex' alignItems='center' sx={{ cursor: 'default' }}>
                        <Avatar src='/favicon.png' alt='mascota de cafe logo' />
                        <Typography variant="h6" component="h1" ml={1}> Mascota de Cafe </Typography>
                    </Box>
                </Link>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Link href='/cart'>
                    <Tooltip title='View Cart'>
                        <StyledBadge badgeContent={cartItems.length} color="primary">
                            <StyledIconButton aria-label="dark theme">
                                <ShoppingCartOutlinedIcon />
                            </StyledIconButton>
                        </StyledBadge>
                    </Tooltip>
                </Link>

                <Box p={1}></Box>

                {theme === 'light'
                    ? <Tooltip title='Switch to Dark Mode'>
                        <StyledIconButton aria-label="dark theme" onClick={() => setTheme('dark')}>
                            <DarkModeOutlinedIcon />
                        </StyledIconButton>
                    </Tooltip>
                    : <Tooltip title='Switch to Light Mode'>
                        <StyledIconButton aria-label="light theme" onClick={() => setTheme('light')}>
                            <LightModeOutlinedIcon />
                        </StyledIconButton>
                    </Tooltip>
                }
            </Toolbar>
        </AppBar>
    </>;
}