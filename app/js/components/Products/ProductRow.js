import React from 'react'
import { Link } from 'react-router'


export default class ProductRow extends React.Component {
    constructor() {
        super();
    }

    

    render() {
        const style = {
            width: '35%',
            height: 'auto'
        }
        const { productName, productAdjective, price, id, image } = this.props.product
        return (
            <div className="pure-u-1 pure-u-md-1-2">
                <h3><Link to={`/products/${id}`}>{productName}</Link></h3>
                <ul>
                    <li>{productAdjective}</li>
                    <li>${price}</li>
                    <li><img style={style} className="pure-img" src={image} /></li>
                </ul>
            </div>
        )
    }
}