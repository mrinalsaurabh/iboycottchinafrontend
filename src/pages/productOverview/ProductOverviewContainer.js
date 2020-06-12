import { connect } from 'react-redux'
import ProductOverview from './ProductOverview'
import { getProduct, getAlternates } from '../../redux/action/productAction'
import { postCart } from '../../redux/action/cartAction'

const mapStoreToProps = function (state) {
  return {
    product: state.product.product,
    alternate: state.product.alternate
  }
}

const mapDispatchToProps = {
  getProduct,
  getAlternates,
  postCart
}

export default connect(mapStoreToProps, mapDispatchToProps)(ProductOverview)