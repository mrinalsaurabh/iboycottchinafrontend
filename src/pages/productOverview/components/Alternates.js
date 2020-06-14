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
            <div className={styles.title}>
            </div>
            <div className={styles.title}>
              {alternate.source}
            </div>
            <div className={styles.color_pic}>
              <img src={alternate.imagePath} alt="" />
            </div>
          </div>
        )}
      </div >
    )
  }
}


