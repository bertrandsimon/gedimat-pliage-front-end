import { Metadata } from 'next'

export interface SEOData {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
    noIndex?: boolean
    category?: string
    subcategory?: string
    productName?: string
}

// Category mappings for SEO
export const categorySEO = {
    'couverture_etancheite': {
        title: 'Couverture et Étanchéité',
        description: 'Solutions de couverture et étanchéité en aluminium. Faîtières, solins, couvertines et accessoires pour une protection optimale de votre toiture.',
        keywords: ['couverture aluminium', 'étanchéité', 'faîtières', 'solins', 'couvertines', 'toiture', 'protection']
    },
    'facade_bardage': {
        title: 'Façade et Bardage',
        description: 'Bardage et façade en aluminium. Angles, cornières et éléments de finition pour une façade moderne et durable.',
        keywords: ['bardage aluminium', 'façade', 'angles', 'cornières', 'finition façade', 'revêtement']
    },
    'menuiserie_fermeture': {
        title: 'Menuiserie et Fermeture',
        description: 'Menuiserie aluminium et fermetures. Appuis de fenêtre, tablettes et accessoires pour vos ouvertures.',
        keywords: ['menuiserie aluminium', 'fermeture', 'appuis fenêtre', 'tablettes', 'ouverture', 'fenêtre']
    }
}

// Subcategory mappings for SEO
export const subcategorySEO = {
    'faitieres': {
        title: 'Faîtières',
        description: 'Faîtières en aluminium pour la finition de votre toiture. Protection et esthétique garanties.',
        keywords: ['faîtières aluminium', 'finition toiture', 'protection toit']
    },
    'solins': {
        title: 'Solins',
        description: 'Solins en aluminium pour l\'étanchéité de votre toiture. Installation professionnelle.',
        keywords: ['solins aluminium', 'étanchéité', 'toiture étanche']
    },
    'couvertines': {
        title: 'Couvertines',
        description: 'Couvertines en aluminium pour la protection et l\'esthétique de votre façade.',
        keywords: ['couvertines aluminium', 'protection façade', 'finition']
    },
    'appuis_de_fenetre': {
        title: 'Appuis de Fenêtre',
        description: 'Appuis de fenêtre en aluminium. Protection et évacuation des eaux de pluie.',
        keywords: ['appuis fenêtre aluminium', 'protection fenêtre', 'évacuation eau']
    }
}

export function generateMetadata(seoData: SEOData): Metadata {
    const {
        title,
        description,
        keywords = [],
        image = '/images/og-default.jpg',
        url,
        noIndex = false
    } = seoData

    const fullTitle = title.includes('Pliage Aluminium') ? title : `${title} | Pliage Aluminium`
    const fullDescription = description || 'Expert en pliage aluminium sur mesure pour vos projets professionnels et résidentiels.'

    return {
        title: fullTitle,
        description: fullDescription,
        keywords: keywords.join(', '),
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            type: 'website',
            locale: 'fr_FR',
            url: url,
            siteName: 'Pliage Aluminium',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: fullDescription,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    }
}

// Generate category page metadata
export function generateCategoryMetadata(category: string, subcategory?: string): Metadata {
    const categoryData = categorySEO[category as keyof typeof categorySEO]

    if (!categoryData) {
        return generateMetadata({
            title: 'Produits',
            description: 'Découvrez notre gamme complète de produits en aluminium.',
        })
    }

    if (subcategory) {
        const subcategoryData = subcategorySEO[subcategory as keyof typeof subcategorySEO]
        if (subcategoryData) {
            return generateMetadata({
                title: `${subcategoryData.title} - ${categoryData.title}`,
                description: subcategoryData.description,
                keywords: [...categoryData.keywords, ...subcategoryData.keywords],
                category,
                subcategory,
            })
        }
    }

    return generateMetadata({
        title: categoryData.title,
        description: categoryData.description,
        keywords: categoryData.keywords,
        category,
    })
}

// Generate product page metadata
export function generateProductMetadata(product: {
    name: string
    category: string
    sub_category: string
    description?: string
}): Metadata {
    const categoryData = categorySEO[product.category as keyof typeof categorySEO]
    const subcategoryData = subcategorySEO[product.sub_category as keyof typeof subcategorySEO]

    const title = `${product.name} - ${subcategoryData?.title || categoryData?.title || 'Produit'}`
    const description = product.description ||
        `Découvrez ${product.name}, produit de qualité en aluminium pour ${subcategoryData?.title || categoryData?.title || 'vos projets'}.`

    const keywords = [
        product.name.toLowerCase(),
        'aluminium',
        'pliage aluminium',
        ...(categoryData?.keywords || []),
        ...(subcategoryData?.keywords || [])
    ]

    return generateMetadata({
        title,
        description,
        keywords,
        productName: product.name,
        category: product.category,
        subcategory: product.sub_category,
    })
}

// Generate page-specific metadata
export function generatePageMetadata(page: string, data?: any): Metadata {
    const pageMetadata = {
        'contact': {
            title: 'Contact - Pliage Aluminium',
            description: 'Contactez nos experts en pliage aluminium. Devis gratuit et conseils personnalisés pour vos projets.',
            keywords: ['contact pliage aluminium', 'devis gratuit', 'conseil expert', 'projet aluminium']
        },
        'presentation': {
            title: 'Présentation - Pliage Aluminium',
            description: 'Découvrez Pliage Aluminium, expert en transformation d\'aluminium sur mesure depuis plus de 20 ans.',
            keywords: ['présentation', 'entreprise aluminium', 'expertise', 'transformation aluminium']
        },
        'faq': {
            title: 'FAQ - Questions Fréquentes',
            description: 'Trouvez les réponses à vos questions sur le pliage aluminium, nos services et nos produits.',
            keywords: ['faq', 'questions fréquentes', 'aide', 'support', 'pliage aluminium']
        },
        'cgv': {
            title: 'Mentions Légales - CGV',
            description: 'Conditions générales de vente et mentions légales de Pliage Aluminium.',
            keywords: ['cgv', 'mentions légales', 'conditions vente', 'droits']
        },
        'inspirations': {
            title: 'Inspirations - Projets Aluminium',
            description: 'Découvrez nos réalisations et trouvez l\'inspiration pour vos projets en aluminium.',
            keywords: ['inspirations', 'projets aluminium', 'réalisations', 'galerie', 'exemples']
        },
        'cart': {
            title: 'Panier - Pliage Aluminium',
            description: 'Votre panier de produits en aluminium. Finalisez votre commande en toute sécurité.',
            keywords: ['panier', 'commande', 'achat aluminium', 'finaliser commande']
        },
        'dashboard': {
            title: 'Mon Espace - Pliage Aluminium',
            description: 'Accédez à votre espace personnel pour gérer vos commandes et informations.',
            keywords: ['mon espace', 'compte client', 'commandes', 'profil']
        }
    }

    const pageData = pageMetadata[page as keyof typeof pageMetadata]

    if (!pageData) {
        return generateMetadata({
            title: 'Pliage Aluminium',
            description: 'Expert en pliage aluminium sur mesure.',
        })
    }

    return generateMetadata(pageData)
}
