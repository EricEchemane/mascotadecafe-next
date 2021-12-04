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
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../context_hooks/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { styled, experimental_sx as sx } from '@mui/material/styles';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);
    const { cartItems } = useContext(ShoppingCartContext);

    const navLinks = useRef();
    const mobMenuBtn = useRef();

    const menuIsShown = useRef(false);

    const router = useRouter();

    const navBP/* nav breakpoint */ = useMediaQuery('(max-width: 680px)');

    useEffect(() => {
        window.addEventListener('click', clickHandler);

        navLinks.current = document.getElementById('nav-links');
        mobMenuBtn.current = document.getElementById('mob-menu-btn');

        return () => window.removeEventListener('click', clickHandler);
    }, []);

    function clickHandler(e) {
        if (mobMenuBtn.current.contains(e.target)) {
            if (!menuIsShown.current) navLinks.current.classList.add('open-menu');
            else navLinks.current.classList.remove('open-menu');
            menuIsShown.current = !menuIsShown.current;
        }
        else {
            navLinks.current.classList.remove('open-menu');
            menuIsShown.current = false;
        }
    }

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
        <AppBar position="static" id='nav' color='default' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Link href='/' passHref>
                    <Box display='flex' alignItems='center' sx={{ cursor: 'pointer' }}>
                        <Avatar src='/favicon.png' alt='mascota de cafe logo' />
                        <Typography variant="h6" component="h1" ml={1}> Mascota de Cafe </Typography>
                    </Box>
                </Link>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Box p={1} display='flex' gap='1rem' mr={2} id='nav-links'>

                    <Link href='/about' >
                        <Button
                            color={router.pathname == '/about' ? 'primary' : 'inherit'}
                            sx={{ justifyContent: navBP ? 'flex-start' : 'center' }}
                            fullWidth={navBP}>
                            About
                        </Button>
                    </Link>
                    <Link href='/pets'>
                        <Button
                            color={router.pathname == '/pets' ? 'primary' : 'inherit'}
                            sx={{ justifyContent: navBP ? 'flex-start' : 'center' }}
                            fullWidth={navBP}>
                            Pets
                        </Button>
                    </Link>
                    <Link href='/contact'>
                        <Button
                            color={router.pathname == '/contact' ? 'primary' : 'inherit'}
                            sx={{ justifyContent: navBP ? 'flex-start' : 'center' }}
                            fullWidth={navBP}>
                            Contact
                        </Button>
                    </Link>

                    <Box id="mob-theme-btns" sx={{ cursor: 'pointer' }}>
                        {theme === 'light'
                            ? <Box onClick={() => setTheme('dark')}>
                                <IconButton aria-label="dark theme">
                                    <DarkModeOutlinedIcon />
                                </IconButton>
                                Dark Mode
                            </Box>
                            : <Box onClick={() => setTheme('light')}>
                                <IconButton aria-label="light theme">
                                    <LightModeOutlinedIcon />
                                </IconButton> Light Mode
                            </Box>
                        }
                    </Box>
                </Box>

                <Link href='/cart'>
                    <StyledBadge badgeContent={cartItems.length} color="secondary">
                        <StyledIconButton aria-label="dark theme" color={router.pathname == '/cart' ? 'primary' : 'default'}>
                            <ShoppingCartOutlinedIcon />
                        </StyledIconButton>
                    </StyledBadge>
                </Link>

                <Box mx={1}></Box>

                <span id='theme-btn'>
                    {theme === 'light'
                        ? <StyledIconButton aria-label="dark theme" onClick={() => setTheme('dark')}>
                            <DarkModeOutlinedIcon />
                        </StyledIconButton>
                        : <StyledIconButton aria-label="light theme" onClick={() => setTheme('light')}>
                            <LightModeOutlinedIcon />
                        </StyledIconButton>
                    }
                </span>

                <Box id="mob-menu-btn">
                    <StyledIconButton aria-label="open menu">
                        <MenuOpenOutlinedIcon />
                    </StyledIconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </>;
}