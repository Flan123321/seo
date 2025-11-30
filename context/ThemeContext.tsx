'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeConfig } from '@/types';

interface ThemeContextType {
    theme: ThemeConfig | null;
    setTheme: (theme: ThemeConfig) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeConfig | null>(null);

    useEffect(() => {
        if (theme) {
            const root = document.documentElement;

            // Palette
            root.style.setProperty('--primary', theme.palette.primary);
            root.style.setProperty('--secondary', theme.palette.secondary);
            root.style.setProperty('--surface', theme.palette.surface);
            root.style.setProperty('--text', theme.palette.text);
            root.style.setProperty('--background', theme.palette.background);

            // Typography
            root.style.setProperty('--font-heading', theme.typography.heading);
            root.style.setProperty('--font-body', theme.typography.body);

            // Shapes
            root.style.setProperty('--radius', theme.shapes.borderRadius);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
