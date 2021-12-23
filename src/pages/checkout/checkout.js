import React, { useContext, useState } from 'react'
import { HiX } from 'react-icons/hi'
import addons from 'src/data/addons.json'
import main from 'src/data/main.json'
import ModalContext from '../../utilities/contexts/modal.context'
import styles from './checkout.module.css'

export default function Checkout() {
   const { setModal } = useContext(ModalContext)

   const [checklist, setChecklist] = useState([])
   const [focusedIndex, setFocusedIndex] = useState()

   function addProduct(product) {
      const add = (({ name, price }) => ({
         name,
         price,
         addons: []
      }))(product)
      setFocusedIndex(checklist.length)
      setChecklist(prev => [...prev, add])
   }

   function selectProduct(index) {
      setFocusedIndex(index)
   }

   function addAddon(addon) {
      if (focusedIndex === undefined) return
      setChecklist(prev => {
         const next = [...prev]
         next[focusedIndex].addons = [...next[focusedIndex].addons, addon]
         return next
      })
   }

   function removeProduct(e, index) {
      e.stopPropagation()
      setFocusedIndex(undefined)
      setChecklist(prev => prev.filter((_, i) => i !== index))
   }

   function removeAddon(e, productIndex, addonIndex) {
      e.stopPropagation()
      setFocusedIndex(productIndex)
      setChecklist(prev => {
         const next = [...prev]
         next[productIndex].addons = next[productIndex].addons.filter((_, i) => i !== addonIndex)
         return next
      })
   }

   function checkout() {
      setChecklist([])
      setModal({
         open: true,
         content: <div style={{ width: 240, height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            Testind modal animation
         </div>
      })
   }

   return (
      <div className={styles.page}>
         <div className={styles.layout}>
            <div className={styles.checkoutLayout}>
               <div className={styles.checkoutContainer}>
                  {checklist.map((product, i) =>
                     <div className={`${styles.checkoutItem} ${i === focusedIndex ? styles.focusedCheckoutItem : ''}`} key={i} onClick={() => selectProduct(i)}>
                        <div className={styles.checkoutProductContainer}>
                           <div className={styles.checkoutMain}>
                              <div className={styles.checkoutMainName}>
                                 <span className={styles.checkoutItemOrder}>{i + 1}.</span>
                                 {product.name}
                              </div>
                              <div className={styles.checkoutMainPrice}>
                                 {product.price}
                              </div>
                              <HiX className={styles.xIcon} onClick={e => removeProduct(e, i)} />
                           </div>
                           {product.addons.map((addon, j) =>
                              <div className={styles.checkoutAddon} key={j}>
                                 <div className={styles.checkoutAddonName}>
                                    {addon.name}
                                 </div>
                                 <div className={styles.checkoutAddonPrice}>
                                    {addon.price}
                                 </div>
                                 <HiX className={styles.xIcon} onClick={e => removeAddon(e, i, j)} />
                              </div>
                           )}
                        </div>
                        <div className={styles.checkoutPriceContainer}>
                           {product.addons.reduce((acc, cv) => acc + cv.price, product.price)}
                        </div>
                     </div>
                  )}
               </div>
               <div className={styles.totalPriceContainer}>
                  <span className="">
                     Нийт дүн:
                  </span>
                  <span className="">
                     {checklist.reduce((acc, cv) => acc + cv.price + cv.addons.reduce((acc1, cv1) => acc1 + cv1.price, 0), 0)}
                  </span>
               </div>
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
                  <div className={styles.addon} key={i} onClick={() => addAddon(addon)}>
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
         <div className={styles.checkoutButtonContainer}>
            <button className={styles.checkoutButton} onClick={checkout}>
               Checkout
            </button>
         </div>
      </div>
   )
}
