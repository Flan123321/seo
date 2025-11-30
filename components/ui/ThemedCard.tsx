'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ThemedCardProps {
    children: React.ReactNode;
    className?: string;
}

export function ThemedCard({ children, className = '' }: ThemedCardProps) {
    const { theme } = useTheme();

    const style = {
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius)',
        border: theme?.mode === 'tech' ? '1px solid rgba(0,0,0,0.1)' : 'none',
        boxShadow: theme?.mode === 'playful'
            ? '8px 8px 0px rgba(0,0,0,0.05)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    };

    return (
        <div
            style={style}
            className={`p-6 ${className}`}
        >
            {children}
        </div>
    );
}
