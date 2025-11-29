import Link from 'next/link';
import { NICHES, PAGES_BY_NICHE, ALL_PAGES } from '@/lib/data';
import styles from './page.module.css';

export default function HomePage() {
    const totalPages = ALL_PAGES.length;

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>
                        Encuentra Respuestas <span className={styles.highlight}>Precisas</span> a Tus Preguntas
                    </h1>
                    <p className={styles.heroSubtitle}>
                        {totalPages}+ guías especializadas en 8 nichos diferentes. Información verificada, práctica y fácil de entender.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{totalPages}+</div>
                            <div className={styles.statLabel}>Guías Completas</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>8</div>
                            <div className={styles.statLabel}>Nichos Diferentes</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Información Práctica</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Niches Section */}
            <section id="nichos" className={styles.nichesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Explora Nuestros Nichos</h2>
                    <p className={styles.sectionSubtitle}>
                        Selecciona el área que te interesa y descubre guías detalladas
                    </p>

                    <div className={styles.nichesGrid}>
                        {NICHES.map((niche) => {
                            const pageCount = PAGES_BY_NICHE[niche.id]?.length || 0;
                            const firstPage = PAGES_BY_NICHE[niche.id]?.[0];

                            return (
                                <Link
                                    key={niche.id}
                                    href={firstPage ? `/${firstPage.slug}` : '#'}
                                    className={styles.nicheCard}
                                    style={{ borderColor: niche.color }}
                                >
                                    <div className={styles.nicheIcon}>{niche.icon}</div>
                                    <h3 className={styles.nicheTitle}>{niche.name}</h3>
                                    <p className={styles.nicheDescription}>{niche.description}</p>
                                    <div className={styles.nicheFooter}>
                                        <span className={styles.pageCount}>{pageCount} guías</span>
                                        <span className={styles.arrow}>→</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container text-center">
                    <h2 className={styles.ctaTitle}>¿Listo para Encontrar lo que Buscas?</h2>
                    <p className={styles.ctaText}>
                        Explora nuestras guías especializadas y encuentra soluciones prácticas a tus preguntas
                    </p>
                </div>
            </section>
        </div>
    );
}
