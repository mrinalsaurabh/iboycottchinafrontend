import React, { Component } from 'react'
import styles from '../stylesheets/alternates.module.sass'


export default class Alternates extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={styles.alternate_outbox}>
        <div className={styles.alternate_title}>
          Alternates
        </div>
        {this.props.alternates && this.props.alternates.map(alternate =>
          <div className={styles.alternate}>
            {/* top descriptions */}
            <div className={styles.title}>
              {alternate.title}
            </div>
            <div className={styles.color_pic}>
              <img crossOrigin="" className={styles.imagecomp} src={alternate.imagePath} alt="" />
            </div>
            <div className={styles.description}>
              {alternate.description}
            </div>
            <div className={styles.price}>
              ${alternate.price}
            </div>
            <div className={styles.source_heading}>
              Source
            </div>
            <div className={styles.source}>
              {alternate.source}
            </div>
          </div>
        )}
      </div >
    )
  }
}


