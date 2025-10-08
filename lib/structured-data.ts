export interface StructuredDataProps {
    type: 'Organization' | 'Product' | 'WebSite' | 'BreadcrumbList'
    data: any
}

export function generateOrganizationStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pliage Aluminium',
        description: 'Expert en pliage aluminium sur mesure pour vos projets professionnels et résidentiels',
        url: 'https://pliage-aluminium.com',
        logo: 'https://pliage-aluminium.com/images/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+33-XX-XX-XX-XX',
            contactType: 'customer service',
            availableLanguage: 'French'
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
            addressLocality: 'France'
        },
        sameAs: [
            // Add social media URLs here
        ]
    }
}

export function generateProductStructuredData(product: {
    name: string
    description?: string
    category: string
    sub_category: string
    price?: number
    image?: string
    url: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description || `Produit en aluminium ${product.name}`,
        category: product.category,
        brand: {
            '@type': 'Brand',
            name: 'Pliage Aluminium'
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'Pliage Aluminium'
        },
        material: 'Aluminium',
        url: product.url,
        image: product.image || 'https://pliage-aluminium.com/images/products/default.jpg',
        offers: product.price ? {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Organization',
                name: 'Pliage Aluminium'
            }
        } : undefined
    }
}

export function generateWebSiteStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Pliage Aluminium',
        description: 'Expert en pliage aluminium sur mesure',
        url: 'https://pliage-aluminium.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://pliage-aluminium.com/products?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    }
}

export function generateBreadcrumbStructuredData(breadcrumbs: Array<{
    name: string
    url: string
}>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: breadcrumb.name,
            item: breadcrumb.url
        }))
    }
}
