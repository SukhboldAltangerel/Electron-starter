import React from 'react'
import Sidebar from 'components/sidebar/sidebar'
import EntryRoutes from 'routes/routes'
import styles from './app.module.css'
import { ModalStore } from './utilities/contexts/modal.context'
import Modal from './components/modal/modal'

export default function App() {
   return (
      <ModalStore>
         <Modal />
         <div className={styles.layout}>
            <Sidebar />
            <div className={styles.pageContainer}>
               <EntryRoutes />
            </div>
         </div>
      </ModalStore>
   )
}
