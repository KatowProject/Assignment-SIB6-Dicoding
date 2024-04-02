import { useState, useEffect } from 'react';

const useTheme = () => {
    // Get the current theme from localStorage or set to 'light' if it doesn't exist
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(initialTheme);

    // Change the theme
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Update the theme in localStorage when it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, changeTheme];
};

export default useTheme;