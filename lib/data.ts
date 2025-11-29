import { NicheConfig, LandingPageData, AggregatedData } from '@/types';

// Import all JSON data files - Original files
import conversionesCocina from '@/data/conversiones-cocina.json';
import suenosAnimalesParte1 from '@/data/suenos-animales-parte1.json';
import codigosError from '@/data/codigos-error-electrodomesticos.json';
import medidasNeumaticos from '@/data/medidas-neumaticos-autos.json';
import comparativasSuplementos from '@/data/comparativas-suplementos.json';
import plantasMedicinales from '@/data/plantas-medicinales-usos.json';
import repuestosCelulares from '@/data/repuestos-celulares.json';
import significadoNumeros from '@/data/significado-numeros-numerologia.json';

// Import Parte 2 files
import suplementosParte2 from '@/data/suplementos-deportivos-parte2.json';
import suenosAnimalesParte2 from '@/data/suenos-animales-parte2.json';
import numerosAngelicalesParte2 from '@/data/numeros-angelicales-parte2.json';
import plantasMedicinalesParte2 from '@/data/plantas-medicinales-parte2.json';
import repuestosCelularesParte2 from '@/data/repuestos-celulares-parte2.json';
import medidasNeumaticosParte2 from '@/data/medidas-neumaticos-parte2.json';
import codigosErrorParte2 from '@/data/codigos-error-electrodomesticos-parte2.json';

// Import Parte 3 files
import suplementosParte3 from '@/data/suplementos-deportivos-parte3.json';
import suenosAnimalesParte3 from '@/data/suenos-animales-parte3.json';
import numerosAngelicalesParte3 from '@/data/numeros-angelicales-parte3.json';
import plantasMedicinalesParte3 from '@/data/plantas-medicinales-parte3.json';
import repuestosCelularesParte3 from '@/data/repuestos-celulares-parte3.json';
import medidasNeumaticosParte3 from '@/data/medidas-neumaticos-parte3.json';
import codigosErrorParte3 from '@/data/codigos-error-electrodomesticos-parte3.json';

// Import Parte 4 files
import suplementosParte4 from '@/data/suplementos-deportivos-parte4.json';
import conversionesCocinaParte2 from '@/data/conversiones-cocina-parte2.json';

// Niche configurations with metadata
export const NICHES: NicheConfig[] = [
    {
        id: 'conversiones-cocina',
        name: 'Conversiones de Cocina',
        description: 'Convierte medidas de ingredientes con precisión profesional',
        icon: '👨‍🍳',
        color: '#FF6B6B',
        dataFile: 'conversiones-cocina.json'
    },
    {
        id: 'suenos-animales',
        name: 'Significado de Sueños',
        description: 'Interpreta tus sueños con animales y descubre mensajes ocultos',
        icon: '🌙',
        color: '#4ECDC4',
        dataFile: 'suenos-animales-parte1.json'
    },
    {
        id: 'codigos-error',
        name: 'Códigos de Error',
        description: 'Soluciona errores de electrodomésticos sin llamar al técnico',
        icon: '🔧',
        color: '#95E1D3',
        dataFile: 'codigos-error-electrodomesticos.json'
    },
    {
        id: 'neumaticos-autos',
        name: 'Neumáticos de Autos',
        description: 'Encuentra la medida exacta de neumáticos para tu vehículo',
        icon: '🚗',
        color: '#F38181',
        dataFile: 'medidas-neumaticos-autos.json'
    },
    {
        id: 'suplementos',
        name: 'Comparativas de Suplementos',
        description: 'Compara suplementos deportivos con ciencia real',
        icon: '💪',
        color: '#AA96DA',
        dataFile: 'comparativas-suplementos.json'
    },
    {
        id: 'plantas-medicinales',
        name: 'Plantas Medicinales',
        description: 'Descubre los usos y beneficios de plantas naturales',
        icon: '🌿',
        color: '#FCBAD3',
        dataFile: 'plantas-medicinales-usos.json'
    },
    {
        id: 'repuestos-celulares',
        name: 'Repuestos de Celulares',
        description: 'Guías de reparación y repuestos compatibles',
        icon: '📱',
        color: '#FFFFD2',
        dataFile: 'repuestos-celulares.json'
    },
    {
        id: 'numerologia',
        name: 'Numerología Angelical',
        description: 'Interpreta números repetitivos y mensajes angelicales',
        icon: '✨',
        color: '#A8D8EA',
        dataFile: 'significado-numeros-numerologia.json'
    }
];

// Aggregate all data by niche
const conversionesCocinaAll = [...conversionesCocina, ...conversionesCocinaParte2];
const suenosAnimalesAll = [...suenosAnimalesParte1, ...suenosAnimalesParte2, ...suenosAnimalesParte3];
const codigosErrorAll = [...codigosError, ...codigosErrorParte2, ...codigosErrorParte3];
const medidasNeumaticosAll = [...medidasNeumaticos, ...medidasNeumaticosParte2, ...medidasNeumaticosParte3];
const suplementosAll = [...comparativasSuplementos, ...suplementosParte2, ...suplementosParte3, ...suplementosParte4];
const plantasMedicinalesAll = [...plantasMedicinales, ...plantasMedicinalesParte2, ...plantasMedicinalesParte3];
const repuestosCelularesAll = [...repuestosCelulares, ...repuestosCelularesParte2, ...repuestosCelularesParte3];
const numerologiaAll = [...significadoNumeros, ...numerosAngelicalesParte2, ...numerosAngelicalesParte3];

const allDataSets = [
    conversionesCocinaAll,
    suenosAnimalesAll,
    codigosErrorAll,
    medidasNeumaticosAll,
    suplementosAll,
    plantasMedicinalesAll,
    repuestosCelularesAll,
    numerologiaAll
];

// Flatten all pages
export const ALL_PAGES: LandingPageData[] = allDataSets.flat() as LandingPageData[];

// Group pages by niche
export const PAGES_BY_NICHE: Record<string, LandingPageData[]> = {
    'conversiones-cocina': conversionesCocinaAll as LandingPageData[],
    'suenos-animales': suenosAnimalesAll as LandingPageData[],
    'codigos-error': codigosErrorAll as LandingPageData[],
    'neumaticos-autos': medidasNeumaticosAll as LandingPageData[],
    'suplementos': suplementosAll as LandingPageData[],
    'plantas-medicinales': plantasMedicinalesAll as LandingPageData[],
    'repuestos-celulares': repuestosCelularesAll as LandingPageData[],
    'numerologia': numerologiaAll as LandingPageData[]
};

// Helper functions
export function getPageBySlug(slug: string): LandingPageData | undefined {
    return ALL_PAGES.find(page => page.slug === slug);
}

export function getAllSlugs(): string[] {
    return ALL_PAGES.map(page => page.slug);
}

export function getNicheBySlug(slug: string): NicheConfig | undefined {
    const page = getPageBySlug(slug);
    if (!page) return undefined;

    for (const [nicheId, pages] of Object.entries(PAGES_BY_NICHE)) {
        if (pages.some(p => p.slug === slug)) {
            return NICHES.find(n => n.id === nicheId);
        }
    }
    return undefined;
}

export function getAggregatedData(): AggregatedData {
    return {
        niches: NICHES,
        allPages: ALL_PAGES,
        pagesByNiche: PAGES_BY_NICHE
    };
}
