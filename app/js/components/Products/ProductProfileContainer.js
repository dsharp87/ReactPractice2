import React from  'react'

import { connect } from 'react-redux'
import { getProduct, getProducts } from '../../actions/products'


import ProductProfile from './ProductProfile'

const mapStateToProps = (store) => {
    const { selectedProduct } = store.product
    return {
        selectedProduct: selectedProduct
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: (id) => {
            dispatch(getProduct(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductProfile)