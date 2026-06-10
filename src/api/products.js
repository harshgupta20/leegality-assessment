import { api } from "../utils/axiosInstance";

export const getProducts = async ({ limit, skip }) => {
    try {
        const response = await api('https://dummyjson.com/products', {
            params: {
                limit,
                skip
            }
        });
        return {
            success: true,
            message : 'Products fetched successfully',
            data : response
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async ({id}) => {
    try {
        const response = await api(`https://dummyjson.com/products/${id}`);
        return {
            success: true,
            message : 'Product details fetched successfully',
            data : response
        };
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};