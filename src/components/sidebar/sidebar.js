import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'

export default function Sidebar() {
   return (
      <div className={styles.sidebar}>
         Sidebar
         <Link to="/">
            Home
         </Link>
         <Link to="/checkout">
            Checkout
         </Link>
      </div>
   )
}
