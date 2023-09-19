const requests: {
    fetchProduct: string,
    fetchProductSELECT: string,
    fetchjewelerycategry : string,
    fetchelectronicscategory : string,
    fetchmencategory : string,
    fetchwomencategery : string
}
    = {
    fetchProduct: '/products',
    fetchProductSELECT: '/products/',
    fetchjewelerycategry: '/products/category/jewelery',
    fetchelectronicscategory : '/products/category/electronics',
    fetchmencategory : '/products/category/men\'s clothing',
    fetchwomencategery : '/products/category/women\'s clothing'
}

export default requests;