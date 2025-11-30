import productsData from '@/data/products.json';

// Affiliate link configuration
export const AFFILIATE_LINKS: Record<string, string> = {
    'amazon': 'https://www.amazon.com/s?tag=pornicho-20&k=',
    'default': 'https://www.amazon.com/s?tag=pornicho-20&k='
};

// Generate affiliate link based on monetization focus
export function generateAffiliateLink(monetizationFocus: string): string {
    const searchTerm = encodeURIComponent(monetizationFocus);
    return `${AFFILIATE_LINKS.default}${searchTerm}`;
}

// Product recommendation data structure
export interface ProductRecommendation {
    name: string;
    description: string;
    price: string;
    rating: number;
    affiliateLink: string;
    image?: string;
}

// Helper to find products by keyword
function findProductsByKeyword(keyword: string): any[] {
    const normalizedKeyword = keyword.toLowerCase();
    const allProducts = Object.values(productsData).flat();

    // 1. Exact match in keywords
    const exactMatches = allProducts.filter(p =>
        p.keywords.some((k: string) => normalizedKeyword.includes(k) || k.includes(normalizedKeyword))
    );

    if (exactMatches.length > 0) return exactMatches;

    // 2. Fallback: Random selection from relevant category if possible, or just random
    // For now, return a mix of popular items
    return allProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
}

// Generate product recommendations based on monetization focus
export function generateProductRecommendations(
    monetizationFocus: string,
    count: number = 3
): ProductRecommendation[] {
    const matchedProducts = findProductsByKeyword(monetizationFocus);

    // Take top N matches
    const selectedProducts = matchedProducts.slice(0, count);

    return selectedProducts.map(p => ({
        name: p.name,
        description: p.description,
        price: p.price,
        rating: p.rating,
        image: p.image,
        // Construct affiliate link using ID (assuming ID is ASIN or similar)
        affiliateLink: `https://www.amazon.com/dp/${p.id}?tag=pornicho-20`
    }));
}
