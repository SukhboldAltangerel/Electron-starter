import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { VscPackage } from 'react-icons/vsc'

const items = [{
   label: 'Эхлэл',
   link: '/',
   icon: AiOutlineHome
}, {
   label: 'Касс',
   link: '/checkout',
   icon: BsCartCheck
}, {
   label: 'Бүтээгдэхүүн',
   link: '/products',
   icon: VscPackage
}]

export default function Sidebar() {
   return (
      <div className={styles.sidebar}>
         {items.map((item, i) =>
            <Link to={item.link} key={i}>
               {item.label}
               <item.icon className={styles.icon} />
            </Link>
         )}
      </div>
   )
}
