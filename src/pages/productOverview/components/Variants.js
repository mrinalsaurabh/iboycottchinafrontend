import React from 'react'
import styles from '../stylesheets/variants.module.sass'


export default function Variants({ color, size, variants, selectedSize, handleClick, clickSize }) {
  return (
    <div>
      <div className={styles.color_title}>
        COLOUR:
    </div>
      <div className={styles.color_name}>
        {color}
      </div>
      <div className={styles.color_pic}>
        {variants && variants.map(v =>
          <img onClick={() => handleClick(v)} key={v.color} src={v.imagePath} alt="" />
        )}
      </div>
    </div>
  )
}



