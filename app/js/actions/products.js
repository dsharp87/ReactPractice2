//action types
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'

//action creators

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products: products
    }
}

export const getProduct = (id) => {
    return {
        type: GET_PRODUCT,
        id: id
    }
}