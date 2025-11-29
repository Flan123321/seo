import { LandingPageData } from '@/types';
import Link from 'next/link';
import styles from './RelatedPages.module.css';

interface RelatedPagesProps {
    currentSlug: string;
    nicheId: string;
    allPages: LandingPageData[];
    maxPages?: number;
}

export default function RelatedPages({ currentSlug, nicheId, allPages, maxPages = 6 }: RelatedPagesProps) {
    // Filter pages from same niche, exclude current page
    const relatedPages = allPages
        .filter(page => page.slug !== currentSlug)
        .slice(0, maxPages);

    if (relatedPages.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Guías Relacionadas</h2>
            <div className={styles.grid}>
                {relatedPages.map((page) => (
                    <Link
                        key={page.slug}
                        href={`/${page.slug}`}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.intent}>{page.search_intent}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{page.seo_title}</h3>
                        <p className={styles.cardDescription}>
                            {page.meta_description.slice(0, 120)}...
                        </p>
                        <div className={styles.cardFooter}>
                            <span className={styles.readMore}>Leer más →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
