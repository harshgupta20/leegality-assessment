import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import LeftSidebar from '../components/LeftSidebar';
import ProductDetailsCard from '../components/ProductDetailsCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const result = await getProducts();
            if (result.success) {
                setProducts(result.data?.products || []);
            }
            else {
                throw new Error(result.message || 'Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <div>Products</div>

            <div className='flex gap-8'>
                <div className='w-1/4 p-3 border border-gray-300 rounded-md'>
                    <LeftSidebar />
                </div>
                <div className='w-3/4 p-3 border border-gray-300 rounded-md'>
                    <div className='grid grid-cols-3 gap-4'>
                        {products.map((product) => (
                            <ProductDetailsCard
                                productId={product.id}
                                productThumbnail={product.thumbnail}
                                productTitle={product.title}
                                productPrice={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products