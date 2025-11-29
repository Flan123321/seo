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

    return (
        <div className={styles.page}>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="container">
                <nav className={styles.breadcrumb}>
                    <Link href="/">Inicio</Link>
                    <span className={styles.separator}>›</span>
                    <span>{niche?.name || 'Guía'}</span>
                </nav>
            </div>

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    {niche && (
                        <div className={styles.badge} style={{ background: niche.color }}>
                            {niche.icon} {niche.name}
                        </div>
                    )}
                    <h1 className={styles.title}>{page.seo_title}</h1>
                    <p className={styles.meta}>
                        <span className={styles.intent}>{page.search_intent}</span>
                        <span className={styles.separator}>•</span>
                        <span className={styles.keyword}>{page.primary_keyword}</span>
                    </p>
                </div>
            </section>

            {/* Content */}
            <article className={styles.content}>
                <div className="container">
                    {/* Hook Intro */}
                    <div className={styles.intro}>
                        <p className={styles.hookText}>{page.hook_intro}</p>
                    </div>

                    {/* Dynamic Data Grid */}
                    <div className={styles.dataSection}>
                        <h2 className={styles.sectionTitle}>Información Clave</h2>
                        <DynamicDataGrid data={page.dynamic_data} />
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaSection}>
                        <h2 className={styles.ctaTitle}>¿Listo para Obtener Esto?</h2>
                        <p className={styles.ctaText}>
                            Encuentra el mejor <strong>{page.monetization_focus}</strong> con las mejores ofertas
                        </p>
                        <CTAButton
                            text={`Ver ${page.monetization_focus} en Amazon`}
                            href={affiliateLink}
                            external={true}
                        />
                        <p className={styles.disclaimer}>
                            * Enlaces de afiliado. Ganamos una pequeña comisión sin costo adicional para ti.
                        </p>
                    </div>

                    {/* Product Recommendations */}
                    <ProductGrid products={recommendations} />

                    {/* Related Pages */}
                    {niche && (
                        <RelatedPages
                            currentSlug={slug}
                            nicheId={niche.id}
                            allPages={PAGES_BY_NICHE[niche.id] || []}
                            maxPages={6}
                        />
                    )}

                    {/* Back to Home */}
                    <div className={styles.backSection}>
                        <Link href="/" className={styles.backLink}>
                            ← Volver al Inicio
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
