import { api } from "../utils/axiosInstance";


export const getProducts = async ({
    limit = 12,
    skip = 0,
    category = '',
    search = '',
}) => {
    try {
        let url = 'https://dummyjson.com/products';

        if (search) {
            url = 'https://dummyjson.com/products/search';
        }

        if (category) {
            url = `https://dummyjson.com/products/category/${category}`;
        }

        const params = {
            limit,
            skip,
        };

        if (search) {
            params.q = search;
        }

        const response = await api(url, {
            params,
        });

        return {
            success: true,
            message: 'Products fetched successfully',
            data: response,
        };
    } catch (error) {
        console.error('Error fetching products:', error);

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
