'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ThemedButton } from './ui/ThemedButton';

interface SolutionHeroProps {
    title: string;
    subtitle: string;
    nicheName: string;
    nicheIcon: string;
    primaryKeyword: string;
}

export default function SolutionHero({ title, subtitle, nicheName, nicheIcon, primaryKeyword }: SolutionHeroProps) {
    const { theme } = useTheme();

    // Dynamic background styles based on theme mode
    const getBackgroundStyle = () => {
        if (!theme) return {};

        switch (theme.mode) {
            case 'tech':
                return {
                    background: `radial-gradient(circle at 50% 50%, ${theme.palette.secondary} 0%, ${theme.palette.background} 100%)`,
                    backgroundImage: `radial-gradient(${theme.palette.secondary} 1px, transparent 1px), radial-gradient(${theme.palette.secondary} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px'
                };
            case 'organic':
                return {
                    background: `linear-gradient(135deg, ${theme.palette.background} 0%, ${theme.palette.secondary} 100%)`,
                };
            case 'playful':
                return {
                    backgroundColor: theme.palette.background,
                    backgroundImage: `radial-gradient(${theme.palette.primary} 20%, transparent 20%), radial-gradient(${theme.palette.secondary} 20%, transparent 20%)`,
                    backgroundSize: '50px 50px',
                    backgroundPosition: '0 0, 25px 25px',
                    opacity: 0.8
                };
            case 'elegant':
                return {
                    background: theme.palette.background,
                    borderBottom: `1px solid ${theme.palette.secondary}`
                };
            default:
                return { background: theme.palette.background };
        }
    };

    return (
        <section className="relative py-20 overflow-hidden" style={getBackgroundStyle()}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{
                            backgroundColor: theme?.palette.surface,
                            color: theme?.palette.text,
                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                        }}>
                        <span className="text-xl">{nicheIcon}</span>
                        <span className="font-medium text-sm uppercase tracking-wider">{nicheName}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            color: theme?.palette.text
                        }}>
                        {title}
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90"
                        style={{
                            fontFamily: 'var(--font-body)',
                            color: theme?.palette.text
                        }}>
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ThemedButton variant="primary">
                            Ver Solución
                        </ThemedButton>
                        <ThemedButton variant="outline">
                            Leer Guía Completa
                        </ThemedButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
