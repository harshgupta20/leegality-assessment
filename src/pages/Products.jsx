import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import LeftSidebar from '../components/LeftSidebar';
import ProductDetailsCard from '../components/ProductDetailsCard';

const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const result = await getProducts();
            setProducts(result.data?.products || []);
        };
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