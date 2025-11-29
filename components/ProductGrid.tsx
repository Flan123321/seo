import { ProductRecommendation } from '@/lib/affiliate';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
    products: ProductRecommendation[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Productos Recomendados</h3>
            <div className={styles.grid}>
                {products.map((product, index) => (
                    <a
                        key={index}
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className={styles.card}
                    >
                        <div className={styles.cardContent}>
                            <h4 className={styles.productName}>{product.name}</h4>
                            <p className={styles.description}>{product.description}</p>
                            <div className={styles.footer}>
                                <div className={styles.rating}>
                                    {'★'.repeat(Math.floor(product.rating))}
                                    {'☆'.repeat(5 - Math.floor(product.rating))}
                                    <span className={styles.ratingValue}>({product.rating})</span>
                                </div>
                                <div className={styles.price}>{product.price}</div>
                            </div>
                            <button className={styles.button}>Ver Oferta</button>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
