import React from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList'

const mapStateToProps = (store) => {
    const { products } = store.product;
    // console.log(store.product.products)
    return {
        products: products
    }
}

//not needed for now
// const mapDispatchToProps = (dispatch) => {

// }

export default connect(
    mapStateToProps
)(ProductList)