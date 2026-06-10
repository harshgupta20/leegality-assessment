import { api } from "../utils/axiosInstance";

export const getProducts = async () => {
    try {
        const response = await api('https://dummyjson.com/products');
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