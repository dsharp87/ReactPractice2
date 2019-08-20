import React from 'react'
import PRODUCTS from '../../../../mock-products'

export default class ProductProfile extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        let productID = this.props.id || +this.props.params.id;
        this.product = PRODUCTS.find((product) =>
            product.id === productID
        )    
    }

    render() {
        let { productName, productAdjective, productMaterial,  price, color, text, image } = this.product
        return (
            <div>
                The <strong>{productName}</strong> has a wonderful {color} color, with inspired {productAdjective} {productMaterial} properties
                <h4>${price}</h4>
                <p>{text}</p>
                <img src={image} alt="failed to load"></img>
            </div>
        )
    }
}