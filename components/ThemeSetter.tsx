'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ThemeConfig } from '@/types';

export default function ThemeSetter({ theme }: { theme: ThemeConfig }) {
    const { setTheme } = useTheme();

    useEffect(() => {
        if (theme) {
            setTheme(theme);
        }
    }, [theme, setTheme]);

    return null;
}
