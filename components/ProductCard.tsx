import { Product } from '@/lib/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.badge}>{product.category}</div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.icon}>📦</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.rating}>
          <div className={styles.stars}>
            {'⭐'.repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && '½'}
          </div>
          <span className={styles.ratingText}>{product.rating}/5</span>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.price}>{product.price}</div>
          <a 
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.button}
          >
            Ver Producto →
          </a>
        </div>
      </div>
    </div>
  );
}
