import React from 'react'
import PRODUCTS from '../../../../mock-products'
import styles from './Products.css'

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
            <div className={styles.products}>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-3-5">
                        The <strong>{productName}</strong> has a wonderful {color} color, with inspired {productAdjective} {productMaterial} properties
                        <h4>${price}</h4>
                        <p>{text}</p>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-5">
                        <img className={`pure-image ${styles.profileImage}`} src={image} alt="failed to load"></img>
                    </div>
                </div>
            </div>
        )
    }
}