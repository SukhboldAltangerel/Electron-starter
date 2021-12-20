import React, { useState } from 'react'
import styles from './checkout.module.css'
import main from 'src/data/main.json'
import addons from 'src/data/addons.json'

const dummyProduct = {
   name: 'tea',
   type: 'green',
   price: 5000,
   addons: [{
      name: 'bubble',
      price: 1500
   }]
}

export default function Checkout() {
   const [checklist, setChecklist] = useState([])
   const [focusedIndex, setFocusedIndex] = useState()

   function addProduct(product) {
      const add = (({ name, price }) => ({ name, price }))(product)
      setChecklist(prev => [...prev, add])
   }

   return (
      <div className={styles.page}>
         <div className={styles.title}>
            Checkout
         </div>
         <div className={styles.layout}>
            <div className={styles.checkoutContainer}>
               {checklist.map((product, i) =>
                  <div className={styles.checkoutItem} key={i}>
                     <div className={styles.checkoutProductContainer}>
                        <div className={styles.checkoutMain}>
                           <div className={styles.checkoutMainName}>
                              {product.name}
                           </div>
                           <div className={styles.checkoutMainPrice}>
                              {product.price}
                           </div>
                        </div>
                        {product.addons.map((addon, j) =>
                           <div className={styles.checkoutAddon} key={j}>
                              <div className={styles.checkoutAddonName}>
                                 {addon.name}
                              </div>
                              <div className={styles.checkoutAddonPrice}>
                                 {addon.price}
                              </div>
                           </div>
                        )}
                     </div>
                     <div className={styles.checkoutPriceContainer}>
                        {product.addons.reduce((acc, cv) => acc + cv.price, product.price)}
                     </div>
                  </div>
               )}
            </div>
            <div className={styles.productsContainer}>
               {main.map((product, i) =>
                  <div className={styles.product} key={i} onClick={() => addProduct(product)}>
                     <div className={styles.productName}>
                        {product.name}
                     </div>
                     <div className={styles.productPrice}>
                        {product.price}
                     </div>
                  </div>
               )}
            </div>
            <div className={styles.addonsContainer}>
               {addons.map((addon, i) =>
                  <div className={styles.addon} key={i}>
                     <div className={styles.addonName}>
                        {addon.name}
                     </div>
                     <div className={styles.addonPrice}>
                        {addon.price}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}
