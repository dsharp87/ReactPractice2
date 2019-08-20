import React from 'react'
import { Link } from 'react-router'

import ProductProfile from './ProductProfile'

export default class ProductRow extends React.Component {
    constructor() {
        super();
    }

    

    render() {
        let { productName, productAdjective, price, id } = this.props.product
        return (
            <div>
                <h3><Link to={`/products/${id}`}>{productName}</Link></h3>
                <ul>
                    <li>{productAdjective}</li>
                    <li>${price}</li>
                </ul>
            </div>
        )
    }
}