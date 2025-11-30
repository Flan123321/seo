// Universal landing page data structure
export interface LandingPageData {
    slug: string;
    primary_keyword: string;
    seo_title: string;
    meta_description: string;
    search_intent: 'Informacional' | 'Transaccional' | 'Navegacional';
    dynamic_data: Record<string, any>;
    hook_intro: string;
    monetization_focus: string;
}

export type DesignMode = 'minimal' | 'playful' | 'tech' | 'organic' | 'elegant';

export interface ThemeConfig {
    mode: DesignMode;
    palette: {
        primary: string;
        secondary: string;
        surface: string;
        text: string;
        background: string;
    };
    typography: {
        heading: string;
        body: string;
    };
    shapes: {
        borderRadius: string;
    };
}

// Niche configuration
export interface NicheConfig {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    dataFile: string;
    theme: ThemeConfig;
}

// Aggregated data structure
export interface AggregatedData {
    niches: NicheConfig[];
    allPages: LandingPageData[];
    pagesByNiche: Record<string, LandingPageData[]>;
}
