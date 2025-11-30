'use client';

import React from 'react';
import { ThemedCard } from './ui/ThemedCard';
import { useTheme } from '@/context/ThemeContext';

interface FeatureGridProps {
    features: { title: string; value: string | number }[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
    const { theme } = useTheme();

    return (
        <section className="py-16" style={{ backgroundColor: theme?.palette.background }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12"
                    style={{ fontFamily: 'var(--font-heading)', color: theme?.palette.text }}>
                    Detalles Clave
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <ThemedCard key={index} className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                            <h3 className="text-lg font-semibold mb-2 opacity-70"
                                style={{ fontFamily: 'var(--font-body)', color: theme?.palette.text }}>
                                {feature.title}
                            </h3>
                            <p className="text-2xl font-bold"
                                style={{ color: theme?.palette.primary }}>
                                {feature.value}
                            </p>
                        </ThemedCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
