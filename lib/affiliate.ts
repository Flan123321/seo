// Affiliate link configuration
export const AFFILIATE_LINKS: Record<string, string> = {
    // Amazon Associates ID
    'amazon': 'https://www.amazon.com/s?tag=pornicho-20&k=',

    // Suplementos
    'creatina': 'https://www.amazon.com/s?tag=pornicho-20&k=creatine+monohydrate',
    'proteina': 'https://www.amazon.com/s?tag=pornicho-20&k=whey+protein',
    'vitamina-d3': 'https://www.amazon.com/s?tag=pornicho-20&k=vitamin+d3+5000',
    'omega-3': 'https://www.amazon.com/s?tag=pornicho-20&k=omega+3+fish+oil',
    'magnesio': 'https://www.amazon.com/s?tag=pornicho-20&k=magnesium+glycinate',

    // Cocina
    'balanza-cocina': 'https://www.amazon.com/s?tag=pornicho-20&k=kitchen+scale+digital',
    'termometro-horno': 'https://www.amazon.com/s?tag=pornicho-20&k=oven+thermometer',
    'jarra-medidora': 'https://www.amazon.com/s?tag=pornicho-20&k=measuring+cup',

    // Repuestos celulares
    'pantalla-iphone': 'https://www.amazon.com/s?tag=pornicho-20&k=iphone+screen+replacement',
    'bateria-samsung': 'https://www.amazon.com/s?tag=pornicho-20&k=samsung+battery+replacement',

    // Neumáticos
    'neumaticos-michelin': 'https://www.amazon.com/s?tag=pornicho-20&k=michelin+tires',
    'neumaticos-bridgestone': 'https://www.amazon.com/s?tag=pornicho-20&k=bridgestone+tires',

    // Plantas medicinales
    'te-verde': 'https://www.amazon.com/s?tag=pornicho-20&k=green+tea+extract',
    'ashwagandha': 'https://www.amazon.com/s?tag=pornicho-20&k=ashwagandha+ksm66',

    // Default
    'default': 'https://www.amazon.com/s?tag=pornicho-20&k='
};

// Generate affiliate link based on monetization focus
export function generateAffiliateLink(monetizationFocus: string): string {
    // Normalize the focus text
    const normalized = monetizationFocus.toLowerCase();

    // Try to find a specific match
    for (const [key, url] of Object.entries(AFFILIATE_LINKS)) {
        if (normalized.includes(key.replace('-', ' '))) {
            return url;
        }
    }

    // Fallback: create search URL with the focus text
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

// Generate product recommendations based on monetization focus
export function generateProductRecommendations(
    monetizationFocus: string,
    count: number = 3
): ProductRecommendation[] {
    // This is a simplified version - in production, you'd fetch from an API
    const baseLink = generateAffiliateLink(monetizationFocus);

    return Array.from({ length: count }, (_, i) => ({
        name: `${monetizationFocus} - Opción ${i + 1}`,
        description: `Producto recomendado de alta calidad para ${monetizationFocus.toLowerCase()}`,
        price: `$${(29.99 + i * 10).toFixed(2)}`,
        rating: 4.5 - (i * 0.2),
        affiliateLink: baseLink
    }));
}
