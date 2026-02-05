export interface Product {
    id: string;
    name: string;
    brand: string;
    price: string;
    imageUrl: string;
    affiliateLink: string;
}

export interface Review {
    slug: string;
    title: string;
    subtitle: string;
    author: string;
    publishDate: string;
    product: Product;

    // ScoreBox Data
    overallScore: number;
    verdict: string;
    safetyScore: number;
    straighteningScore: number;
    durabilityScore: number;

    // Content Data
    pros: string[];
    cons: string[];
    chemicalData: {
        ph: string;
        base: string;
        incompatible: string[];
    };

    // Hardware Pair
    hardwarePair?: {
        title: string;
        productName: string;
        productImage?: string;
        description: string;
        ctaText: string;
        ctaUrl: string;
    }
}

export const products: Product[] = [
    {
        id: 'fashion-gold',
        name: 'Fashion Gold',
        brand: 'Ybera Paris',
        price: 'R$ 287,00',
        imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300&h=300', // Generic reliable placeholder
        affiliateLink: 'https://loja.yberaparis.com.br/fashion-gold-500g?cupom=SEUCUPOM'
    },
    {
        id: 'lizze-extreme',
        name: 'Lizze Extreme',
        brand: 'Lizze',
        price: 'R$ 389,00',
        imageUrl: 'https://images.unsplash.com/photo-1595918306381-897db6c0db76?auto=format&fit=crop&q=80&w=300&h=300',
        affiliateLink: '#'
    }
];

export const reviews: Review[] = [
    {
        slug: 'progressiva-fashion-gold',
        title: 'Fashion Gold: O Alisamento que Mudou o Mercado é Mesmo Seguro?',
        subtitle: 'Analisamos pH, base química e resultados em 4 tipos de cabelo.',
        author: 'Redação CSF',
        publishDate: '20 Out 2024',
        product: products[0],

        overallScore: 9.8,
        verdict: 'A Fashion Gold redefine o padrão de segurança com uma base ácida estável que não afina a fibra capilar a longo prazo. É a escolha técnica número 1 para cabelos descoloridos.',
        safetyScore: 10,
        straighteningScore: 9.5,
        durabilityScore: 9.0,

        pros: ["Compatível com Loiras", "Não afina o fio", "Sem cheiro", "Brilho Espelhado"],
        cons: ["Estoque instável", "Preço Premium"],

        chemicalData: {
            ph: '2.5',
            base: 'Ácido Hialurônico + Kerafive 22',
            incompatible: ['Tioglicolato (Cuidado)', 'Hene (Proibido)']
        },

        hardwarePair: {
            title: 'Chapinha Recomendada',
            productName: 'Lizze Extreme',
            productImage: products[1].imageUrl,
            description: 'Este ácido exige temperatura estável de 230°C para ativação completa.',
            ctaText: 'Ver Chapinha',
            ctaUrl: products[1].affiliateLink
        }
    }
];

export function getReviewBySlug(slug: string): Review | undefined {
    return reviews.find(r => r.slug === slug);
}
