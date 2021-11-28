import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function persistThemeToStorage(theme) {
    localStorage.setItem('mascota-theme', JSON.stringify(theme));
}

export default function useThemeContext() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const themeHasBeenSet = localStorage.getItem('mascota-theme');
        if (themeHasBeenSet) setTheme(JSON.parse(themeHasBeenSet));
    }, []);

    useEffect(() => {
        persistThemeToStorage(theme);
    }, [theme]);

    return { ThemeContext, theme, setTheme };
}