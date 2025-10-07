'use client'

import { usePathname, useSearchParams } from 'next/navigation'

// Category and subcategory mappings
export const categoryMap: Record<string, string> = {
    'couverture_etancheite': 'Couverture et étanchéité',
    'facade_bardage': 'Façade et bardage',
    'menuiserie_fermeture': 'Menuiserie et fermeture'
}

export const subcategoryMap: Record<string, string> = {
    // Couverture et étanchéité
    'couvertines': 'Couvertines',
    'rives': 'Rives',
    'solins': 'Solins',
    'noues': 'Noues',
    'faitieres': 'Faîtières',
    'accessoires': 'Accessoires',

    // Façade et bardage
    'angles': 'Angles',
    'cornieres': 'Cornières',
    'profiles': 'Profilés d\'ossature',

    // Menuiserie et fermeture
    'appuis_de_fenetre': 'Appuis de fenêtre',
    'jambages': 'Jambages',
    'sous-faces': 'Sous-face'
}

// Page title mappings
export const pageTitleMap: Record<string, string> = {
    '/': 'Accueil',
    '/products': 'Produits',
    '/presentation': 'Présentation',
    '/inspirations': 'Inspirations',
    '/contact': 'Contact',
    '/faq': 'FAQ',
    '/cgv': 'Mentions légales',
    '/cart': 'Panier',
    '/dashboard': 'Mon espace',
    '/magic-link': 'Connexion par email',
    '/magic-link-success': 'Connexion réussie'
}

export interface BreadcrumbItem {
    label: string
    href: string
    isLast?: boolean
}

export function useBreadcrumb(customProductName?: string, productCategory?: string, productSubCategory?: string): BreadcrumbItem[] {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const breadcrumbs: BreadcrumbItem[] = []

    // Always start with home
    breadcrumbs.push({
        label: 'Accueil',
        href: '/'
    })

    // Handle different routes
    if (pathname === '/') {
        // Home page - no additional breadcrumbs needed
        return breadcrumbs
    }

    // Handle products page with category and subcategory
    if (pathname === '/products') {
        const category = searchParams.get('category')
        const subcategory = searchParams.get('subcategory')

        if (category && categoryMap[category]) {
            breadcrumbs.push({
                label: categoryMap[category],
                href: `/products?category=${category}`
            })

            if (subcategory && subcategoryMap[subcategory]) {
                breadcrumbs.push({
                    label: subcategoryMap[subcategory],
                    href: `/products?category=${category}&subcategory=${subcategory}`
                })
            }
        } else {
            breadcrumbs.push({
                label: 'Produits',
                href: '/products'
            })
        }
    }

    // Handle single product page
    else if (pathname.startsWith('/products/') && pathname !== '/products') {
        const productId = pathname.split('/')[2]

        // Use product data if available, otherwise fall back to URL params
        const category = productCategory || searchParams.get('category')
        const subcategory = productSubCategory || searchParams.get('subcategory')

        if (category && categoryMap[category]) {
            breadcrumbs.push({
                label: categoryMap[category],
                href: `/products?category=${category}`
            })

            if (subcategory && subcategoryMap[subcategory]) {
                breadcrumbs.push({
                    label: subcategoryMap[subcategory],
                    href: `/products?category=${category}&subcategory=${subcategory}`
                })
            }
        }

        // Add product name
        breadcrumbs.push({
            label: customProductName || 'Produit',
            href: pathname
        })
    }

    // Handle dashboard pages
    else if (pathname.startsWith('/dashboard')) {
        breadcrumbs.push({
            label: 'Mon espace',
            href: '/dashboard'
        })

        // Handle user-specific dashboard
        if (pathname.match(/^\/dashboard\/[a-f0-9]{24}$/)) {
            // This is a user-specific dashboard page
            breadcrumbs.push({
                label: 'Mon compte',
                href: pathname
            })
        }
        // Handle dashboard sub-pages
        else if (pathname.includes('/lists/')) {
            breadcrumbs.push({
                label: 'Mes commandes',
                href: pathname
            })
        } else if (pathname.includes('/singleList/')) {
            breadcrumbs.push({
                label: 'Détail de la commande',
                href: pathname
            })
        }
    }

    // Handle other static pages
    else {
        const pageTitle = pageTitleMap[pathname]
        if (pageTitle) {
            breadcrumbs.push({
                label: pageTitle,
                href: pathname
            })
        }
    }

    // Mark the last item
    if (breadcrumbs.length > 0) {
        breadcrumbs[breadcrumbs.length - 1].isLast = true
    }

    return breadcrumbs
}
