import React from  'react'

import { connect } from 'react-redux'
import { getProduct, getProducts } from '../../actions/products'
import store from '../../store'

import ProductProfile from './ProductProfile'
import PRODUCTS from '../../../../mock-products'

class ProductProfileContainer extends React.Component {
    componentWillMount() {
        if(store.getState().product.products.lenght) {
            return
        } else {
            store.dispatch(getProducts(PRODUCTS))
        }
    }

    render() {
        return <ProductProfile {...this.props} />
    }
}

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
)(ProductProfileContainer)