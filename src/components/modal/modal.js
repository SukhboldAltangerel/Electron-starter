import React, { useContext } from 'react'
import ModalContext from 'src/utilities/contexts/modal.context'
import useKeyPress from '../../utilities/hooks/useKeyPress'
import styles from './modal.module.css'

export default function Modal() {
   const { modal, setModal } = useContext(ModalContext)

   function close() {
      setModal(prev => ({ ...prev, open: false }))
   }

   useKeyPress('Escape', close)

   return modal.open
      ? <div className={styles.modal}>
         Modal
      </div>
      : null
}
