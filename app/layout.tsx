import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
    title: 'Prisma - Authority Platform',
    description: 'Expertise from every angle. Curated guides and solutions for every niche.',
    keywords: ['guides', 'solutions', 'expert advice', 'prisma'],
    authors: [{ name: 'Prisma Team' }],
    openGraph: {
        title: 'Prisma - Authority Platform',
        description: 'Expertise from every angle. Curated guides and solutions for every niche.',
        type: 'website',
    },
};

import { ThemeProvider } from '@/context/ThemeContext';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <ThemeProvider>
                    <Header />
                    <main>{children}</main>
                    <footer style={{
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'var(--surface)',
                        marginTop: '4rem',
                        borderTop: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <p style={{ color: 'var(--text)', opacity: 0.7 }}>© 2024 Prisma. Authority in every spectrum.</p>
                    </footer>
                    <GoogleAnalytics gaId="G-S880YQZ0QQ" />
                </ThemeProvider>
            </body>
        </html>
    );
}
