import React from 'react'
import styles from './products.module.css'
import addons from 'src/data/addons.json'
import main from 'src/data/main.json'

export default function Products() {
   return (
      <div className={styles.page}>
         Products CRUD
         <div className={styles.productsContainer}>
            {main.map((product, i) =>
               <div className={styles.product} key={i}>
                  <span className="">{product.name}</span>
                  <span className="">{product.price}</span>
               </div>
            )}
         </div>
         <div className={styles.addonsContainer}>
            {addons.map((addon, i) =>
               <div className={styles.addon} key={i}>
                  <span className="">{addon.name}</span>
                  <span className="">{addon.price}</span>
               </div>
            )}
         </div>
      </div>
   )
}
