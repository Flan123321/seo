import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPageBySlug, getAllSlugs, getNicheBySlug, PAGES_BY_NICHE } from '@/lib/data';
import { generateAffiliateLink, generateProductRecommendations } from '@/lib/affiliate';
import DynamicDataGrid from '@/components/DynamicDataGrid';
import CTAButton from '@/components/CTAButton';
import ProductGrid from '@/components/ProductGrid';
import RelatedPages from '@/components/RelatedPages';
import styles from './page.module.css';
import ThemeSetter from '@/components/ThemeSetter';
import SolutionHero from '@/components/SolutionHero';
import FeatureGrid from '@/components/FeatureGrid';
import FAQAccordion from '@/components/FAQAccordion';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all pages
export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getPageBySlug(slug);

    if (!page) {
        return {
            title: 'Página no encontrada',
        };
    }

    return {
        title: page.seo_title,
        description: page.meta_description,
        keywords: [page.primary_keyword, ...page.seo_title.split(' ')],
        openGraph: {
            title: page.seo_title,
            description: page.meta_description,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: page.seo_title,
            description: page.meta_description,
        },
    };
}

export default async function LandingPage({ params }: PageProps) {
    const { slug } = await params;
    const page = getPageBySlug(slug);
    const niche = getNicheBySlug(slug);

    if (!page) {
        notFound();
    }

    // Generate affiliate link for monetization
    const affiliateLink = generateAffiliateLink(page.monetization_focus);

    // Generate product recommendations
    const recommendations = generateProductRecommendations(page.monetization_focus);

    // JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.seo_title,
        description: page.meta_description,
        keywords: page.primary_keyword,
    };

    // Prepare features from dynamic_data
    const features = Object.entries(page.dynamic_data).map(([key, value]) => ({
        title: key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        value: String(value)
    })).slice(0, 3); // Take first 3 for the grid

    // Prepare FAQ from metadata (Simple implementation)
    const faqItems = [
        {
            question: `¿${page.primary_keyword}?`,
            answer: page.meta_description
        },
        {
            question: "¿Es esta información confiable?",
            answer: "Sí, nuestros datos son verificados y actualizados constantemente para asegurar la mayor precisión en tus proyectos."
        },
        {
            question: `¿Dónde puedo conseguir ${page.monetization_focus}?`,
            answer: `Recomendamos buscar opciones de alta calidad. Puedes ver nuestra recomendación principal haciendo clic en el botón de abajo.`
        }
    ];

    return (
        <div className={styles.page}>
            {/* Theme Setter */}
            {niche?.theme && <ThemeSetter theme={niche.theme} />}

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <nav className="text-sm opacity-60">
                    <Link href="/" className="hover:underline">Inicio</Link>
                    <span className="mx-2">›</span>
                    <span className="font-medium">{niche?.name || 'Guía'}</span>
                </nav>
            </div>

            {/* Solution Hero */}
            <SolutionHero
                title={page.seo_title}
                subtitle={page.hook_intro}
                nicheName={niche?.name || ''}
                nicheIcon={niche?.icon || ''}
                primaryKeyword={page.primary_keyword}
            />

            {/* Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">

                    {/* Dynamic Data Grid (The "Answer") */}
                    <div className="mb-16">
                        <DynamicDataGrid data={page.dynamic_data} />
                    </div>

                    {/* Feature Grid */}
                    <FeatureGrid features={features} />

                    {/* CTA */}
                    <div className="my-16 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-opacity-5" style={{ backgroundColor: 'var(--primary)' }}>
                        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                            ¿Listo para Obtener Esto?
                        </h2>
                        <p className="mb-8 opacity-80">
                            Encuentra el mejor <strong>{page.monetization_focus}</strong> con las mejores ofertas
                        </p>
                        <CTAButton
                            text={`Ver ${page.monetization_focus} en Amazon`}
                            href={affiliateLink}
                            external={true}
                        />
                        <p className="text-xs mt-4 opacity-60">
                            * Enlaces de afiliado. Ganamos una pequeña comisión sin costo adicional para ti.
                        </p>
                    </div>

                    {/* FAQ */}
                    <FAQAccordion items={faqItems} />

                    {/* Product Recommendations */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                            Recomendados para ti
                        </h2>
                        <ProductGrid products={recommendations} />
                    </div>

                    {/* Related Pages */}
                    {niche && (
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <RelatedPages
                                currentSlug={slug}
                                nicheId={niche.id}
                                allPages={PAGES_BY_NICHE[niche.id] || []}
                                maxPages={6}
                            />
                        </div>
                    )}

                    {/* Back to Home */}
                    <div className="mt-12 text-center">
                        <Link href="/" className="text-sm hover:underline opacity-60">
                            ← Volver al Inicio
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
