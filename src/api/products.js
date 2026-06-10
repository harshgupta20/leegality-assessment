import { api } from "../utils/axiosInstance";


export const getProducts = async ({
    limit = 12,
    skip = 0,
    category = '',
    search = '',
    sortBy = '',
    order = '',
}) => {
    try {
        let url = 'https://dummyjson.com/products';

        if (search) {
            url = 'https://dummyjson.com/products/search';
        } else if (category) {
            url = `https://dummyjson.com/products/category/${category}`;
        }

        const response = await api(url, {
            params: {
                limit,
                skip,
                ...(search && { q: search }),
                ...(sortBy && { sortBy }),
                ...(order && { order }),
            },
        });

        return {
            success: true,
            message: 'Products fetched successfully',
            data: response,
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: error.message,
            data: null,
        };
    }
};

export const getCategories = async () => {
    try {
        const response = await api(
            'https://dummyjson.com/products/categories'
        );

        return {
            success: true,
            message: 'Categories fetched successfully',
            data: response,
        };
    } catch (error) {
        console.error('Error fetching categories:', error);

        return {
            success: false,
            message: error.message,
            data: [],
        };
    }
};

export const getProductById = async ({id}) => {
    try {
        const response = await api(
            `https://dummyjson.com/products/${id}`
        );
        
        return {
            success: true,
            message: 'Product fetched successfully',
            data: response,
        };
    }
    catch (error) {
        console.error('Error fetching product by ID:', error);
        
        return {
            success: false,
            message: error.message,
            data: null,
        };
    }
}
