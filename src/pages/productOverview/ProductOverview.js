import React, { Component } from 'react'
import styles from './stylesheets/productOverview.module.sass'
import Header from '../../components/header/headerContainer'
import Alternates from './components/Alternates'
import jumpTo from '../../modules/Navigation'

export default class ProductOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0])
    this.props.getAlternates(this.props.location.pathname.split("/").slice(-1)[0])
  }

  addToBag = () => {
    this.props.postCart(
      this.state.id || this.props.location.pathname.split("/").slice(-1)[0]
    ).then(res => {
      jumpTo('/bag')
    })
  }

  render() {
    return (
      <div className={styles.outbox}>
        {this.state.product}
        <Header />
        {this.props.product &&
          <div className={styles.content_box}>
            <div className={styles.content}>
              {/* right content box */}
              <div className={styles.context_outbox}>
                <div className={styles.context}>
                  {/* top descriptions */}
                  <div className={styles.title}>
                    {this.props.product.title}
                  </div>
                  <div className={styles.image}>
                    <img crossOrigin="" className={styles.imagecomp} src={this.state.pic || this.props.product.imagePath} alt="" />
                  </div>
                  <div className={styles.description}>
                    {this.props.product.description}
                  </div>
                  <div className={styles.price}>
                    ₹{this.props.product.price}
                  </div>
                  {/* dotted border */}
                  <div className={styles.border}></div>
                  {/* bottom descriptions */}
                </div>
              </div>
            </div>
          </div>
        }
        {this.props.alternate &&
          <Alternates alternates={this.props.alternate} />
        }
      </div>
    )
  }
}
