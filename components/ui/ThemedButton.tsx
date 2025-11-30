'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export function ThemedButton({ children, variant = 'primary', className = '', ...props }: ThemedButtonProps) {
    const { theme } = useTheme();

    const baseStyles = "px-6 py-3 font-medium transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0";

    // Dynamic styles based on CSS variables
    const variants = {
        primary: {
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            borderRadius: 'var(--radius)',
            boxShadow: theme?.mode === 'playful' ? '4px 4px 0px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.1)'
        },
        secondary: {
            backgroundColor: 'var(--secondary)',
            color: 'var(--text)',
            borderRadius: 'var(--radius)',
        },
        outline: {
            border: '2px solid var(--primary)',
            color: 'var(--primary)',
            backgroundColor: 'transparent',
            borderRadius: 'var(--radius)',
        }
    };

    return (
        <button
            style={variants[variant]}
            className={`${baseStyles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
