// Product recommendations by niche and monetization focus
export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    affiliateLink: string;
    imageUrl: string;
    rating: number;
    category: string;
}

// Product database organized by monetization focus keywords
export const PRODUCTS: Record<string, Product[]> = {
    // Cocina - Balanzas y utensilios
    'balanza digital de cocina': [
        {
            id: 'balanza-1',
            name: 'Balanza Digital de Cocina Profesional 5kg',
            description: 'Precisión de 1g, pantalla LCD, función tara, conversión automática de unidades',
            price: '$29.99',
            affiliateLink: 'https://amzn.to/cocina-balanza-digital',
            imageUrl: '/products/balanza-digital.jpg',
            rating: 4.8,
            category: 'Cocina'
        }
    ],

    'utensilios de cocina profesional': [
        {
            id: 'utensilios-1',
            name: 'Set de Medidores de Cocina Profesional',
            description: 'Incluye tazas y cucharas medidoras en acero inoxidable con medidas grabadas',
            price: '$24.99',
            affiliateLink: 'https://amzn.to/medidores-profesional',
            imageUrl: '/products/medidores.jpg',
            rating: 4.7,
            category: 'Cocina'
        }
    ],

    // Sueños - Cursos y libros
    'curso de interpretación de sueños online': [
        {
            id: 'curso-suenos-1',
            name: 'Curso Completo de Interpretación de Sueños',
            description: 'Aprende a descifrar tus sueños con técnicas de psicología jungiana y esoterismo',
            price: '$97.00',
            affiliateLink: 'https://hotmart.com/curso-interpretacion-suenos',
            imageUrl: '/products/curso-suenos.jpg',
            rating: 4.9,
            category: 'Cursos'
        }
    ],

    'libro de interpretación de sueños espirituales': [
        {
            id: 'libro-suenos-1',
            name: 'Diccionario de Sueños: Guía Completa',
            description: 'Más de 1000 símbolos interpretados con significado espiritual y psicológico',
            price: '$19.99',
            affiliateLink: 'https://amzn.to/diccionario-suenos',
            imageUrl: '/products/libro-suenos.jpg',
            rating: 4.6,
            category: 'Libros'
        }
    ],

    // Electrodomésticos - Repuestos
    'filtro de repuesto original samsung': [
        {
            id: 'filtro-samsung-1',
            name: 'Filtro de Desagüe Original Samsung',
            description: 'Compatible con modelos WF, WA y WD. Instalación fácil sin herramientas',
            price: '$12.99',
            affiliateLink: 'https://amzn.to/filtro-samsung-original',
            imageUrl: '/products/filtro-samsung.jpg',
            rating: 4.5,
            category: 'Repuestos'
        }
    ],

    'bomba de drenaje compatible whirlpool': [
        {
            id: 'bomba-whirlpool-1',
            name: 'Bomba de Drenaje Universal Whirlpool',
            description: 'Compatible con la mayoría de modelos Whirlpool. Incluye instrucciones',
            price: '$34.99',
            affiliateLink: 'https://amzn.to/bomba-whirlpool',
            imageUrl: '/products/bomba-whirlpool.jpg',
            rating: 4.4,
            category: 'Repuestos'
        }
    ],

    // Neumáticos
    'neumáticos michelin 205/55r16': [
        {
            id: 'neumatico-1',
            name: 'Michelin Primacy 4 205/55R16',
            description: 'Excelente agarre en mojado, larga duración, bajo ruido. Garantía 60,000 km',
            price: '$89.99',
            affiliateLink: 'https://tiendallanta.com/michelin-primacy',
            imageUrl: '/products/michelin.jpg',
            rating: 4.8,
            category: 'Neumáticos'
        }
    ],

    // Suplementos
    'proteína whey isolate certificada': [
        {
            id: 'proteina-1',
            name: 'Optimum Nutrition Gold Standard 100% Whey',
            description: '24g de proteína por porción, bajo en carbohidratos, sabor chocolate',
            price: '$54.99',
            affiliateLink: 'https://amzn.to/on-gold-standard',
            imageUrl: '/products/whey-on.jpg',
            rating: 4.9,
            category: 'Suplementos'
        }
    ],

    'creatina monohidrato creapure': [
        {
            id: 'creatina-1',
            name: 'Creatina Monohidrato Creapure 500g',
            description: 'Pureza certificada, micronizada para mejor absorción, sin sabor',
            price: '$29.99',
            affiliateLink: 'https://amzn.to/creatina-creapure',
            imageUrl: '/products/creatina.jpg',
            rating: 4.8,
            category: 'Suplementos'
        }
    ],

    // Plantas medicinales
    'hierbas orgánicas certificadas': [
        {
            id: 'hierbas-1',
            name: 'Set de Hierbas Medicinales Orgánicas',
            description: 'Incluye jengibre, cúrcuma, manzanilla y más. Certificación orgánica',
            price: '$34.99',
            affiliateLink: 'https://amzn.to/hierbas-organicas',
            imageUrl: '/products/hierbas.jpg',
            rating: 4.7,
            category: 'Salud Natural'
        }
    ],

    // Celulares
    'pantalla oled iphone 13': [
        {
            id: 'pantalla-iphone-1',
            name: 'Pantalla OLED Original iPhone 13',
            description: 'Calidad OEM, incluye herramientas de instalación y adhesivo',
            price: '$129.99',
            affiliateLink: 'https://amzn.to/pantalla-iphone13',
            imageUrl: '/products/pantalla-iphone.jpg',
            rating: 4.6,
            category: 'Repuestos Móviles'
        }
    ],

    'batería certificada samsung galaxy': [
        {
            id: 'bateria-samsung-1',
            name: 'Batería Original Samsung Galaxy S21',
            description: '4000mAh, certificación CE, garantía 12 meses',
            price: '$39.99',
            affiliateLink: 'https://amzn.to/bateria-s21',
            imageUrl: '/products/bateria-samsung.jpg',
            rating: 4.5,
            category: 'Repuestos Móviles'
        }
    ],

    // Numerología
    'curso de numerología angelical': [
        {
            id: 'curso-numerologia-1',
            name: 'Curso de Numerología Angelical Completo',
            description: 'Aprende a interpretar números repetitivos y mensajes del universo',
            price: '$77.00',
            affiliateLink: 'https://hotmart.com/numerologia-angelical',
            imageUrl: '/products/curso-numerologia.jpg',
            rating: 4.8,
            category: 'Cursos'
        }
    ],

    // Default/Generic
    'default': [
        {
            id: 'generic-1',
            name: 'Producto Recomendado',
            description: 'Encuentra el mejor producto para tus necesidades',
            price: 'Ver precio',
            affiliateLink: '#',
            imageUrl: '/products/default.jpg',
            rating: 4.5,
            category: 'General'
        }
    ]
};

// Helper function to get products by monetization focus
export function getProductsByFocus(monetizationFocus: string): Product[] {
    const focusLower = monetizationFocus.toLowerCase();

    // Try exact match first
    if (PRODUCTS[focusLower]) {
        return PRODUCTS[focusLower];
    }

    // Try partial match
    for (const [key, products] of Object.entries(PRODUCTS)) {
        if (focusLower.includes(key) || key.includes(focusLower)) {
            return products;
        }
    }

    // Return default if no match
    return PRODUCTS['default'];
}

// Helper to get single product
export function getProductByFocus(monetizationFocus: string): Product {
    const products = getProductsByFocus(monetizationFocus);
    return products[0];
}
