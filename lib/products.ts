import connectDB from '@/app/db'
import Product from '@/app/models/Product'

export async function getProducts() {
    await connectDB()
    try {
        // Only select necessary fields for listing page to reduce payload
        const products = await Product.find(
            { active: true },
            {
                _id: 1,
                name: 1,
                main_image: 1,
                category: 1,
                sub_category: 1,
                // Exclude heavy fields like images array, description, etc.
            }
        ).sort({ name: 1 })

        return products.map(product => ({
            ...product.toObject(),
            _id: product._id.toString()
        }))
    } catch (error) {
        console.error('Error fetching products:', error)
        throw new Error('Failed to fetch products')
    }
}
