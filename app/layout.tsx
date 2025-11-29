import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
    title: 'SEO Maestro - Guías y Soluciones Prácticas',
    description: 'Encuentra respuestas precisas a tus preguntas: conversiones de cocina, significado de sueños, solución de errores y más.',
    keywords: ['seo', 'guías', 'tutoriales', 'conversiones', 'sueños', 'reparaciones'],
    authors: [{ name: 'SEO Maestro' }],
    openGraph: {
        title: 'SEO Maestro - Guías y Soluciones Prácticas',
        description: 'Encuentra respuestas precisas a tus preguntas en 8 nichos diferentes',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <Header />
                <main>{children}</main>
                <footer style={{
                    textAlign: 'center',
                    padding: '2rem',
                    background: '#f7fafc',
                    marginTop: '4rem'
                }}>
                    <p>© 2024 SEO Maestro. Todos los derechos reservados.</p>
                </footer>
            </body>
        </html>
    );
}
