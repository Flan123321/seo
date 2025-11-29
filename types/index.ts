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

// Niche configuration
export interface NicheConfig {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    dataFile: string;
}

// Aggregated data structure
export interface AggregatedData {
    niches: NicheConfig[];
    allPages: LandingPageData[];
    pagesByNiche: Record<string, LandingPageData[]>;
}
