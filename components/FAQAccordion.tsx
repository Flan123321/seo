'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ThemedCard } from './ui/ThemedCard';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const { theme } = useTheme();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16" style={{ backgroundColor: theme?.palette.surface }}>
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12"
                    style={{ fontFamily: 'var(--font-heading)', color: theme?.palette.text }}>
                    Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <ThemedCard key={index} className="!p-0 overflow-hidden cursor-pointer">
                            <div
                                className="p-6 flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="font-semibold text-lg" style={{ color: theme?.palette.text }}>
                                    {item.question}
                                </h3>
                                <span style={{ color: theme?.palette.primary, transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }} className="transition-transform duration-300">
                                    ▼
                                </span>
                            </div>
                            <div
                                className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p style={{ color: theme?.palette.text, opacity: 0.8 }}>
                                    {item.answer}
                                </p>
                            </div>
                        </ThemedCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
