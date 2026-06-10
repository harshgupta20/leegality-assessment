import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import LeftSidebar from '../components/LeftSidebar';

const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const result = await getProducts();
            setProducts(result.data);
        };
        fetchProducts();
    }, [])

    console.log("harsh prodcuts", products)

    return (
        <div>
            <div>Products</div>

            <div className='flex gap-8'>
                <div className='w-1/4 p-3 border border-gray-300 rounded-md'>
                   <LeftSidebar />
                </div>
                <div className='w-3/4 p-3 border border-gray-300 rounded-md'>2</div>
            </div>
        </div>
    )
}

export default Products