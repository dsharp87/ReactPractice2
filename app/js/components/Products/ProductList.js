import React from 'react';

import styles from './Products.css'

import ProductRow from './ProductRow'

export default class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        
    }

    render() {
        // console.log(this.props)
        let {products} = this.props
        // console.log(styles);
        return (
            <div className={`pure-g ${styles.products}`}>
                {products.map((product)=> 
                        <ProductRow key={product.id} product={product} />
                )}

            </div>
        )
    }
}