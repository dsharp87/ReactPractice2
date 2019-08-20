import React from 'react';

import ProductRow from './ProductRow'
import PRODUCTS from '../../../../mock-products'

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        this.setState({
            products: PRODUCTS
        })
    }

    render() {
        let { products } = this.state
        // console.log(products);
        return (
            <div>
                {products.map((product)=> 
                        <ProductRow key={product.id} product={product} />
                )}

            </div>
        )
    }
}