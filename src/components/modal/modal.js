import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import ModalContext from 'src/utilities/contexts/modal.context'
import useKeyPress from 'src/utilities/hooks/useKeyPress'
import useClickOutside from 'src/utilities/hooks/useClickOutside'
import styles from './modal.module.css'

export default function Modal() {
   const { modal, setModal } = useContext(ModalContext)

   const [open, setOpen] = useState(false)

   useLayoutEffect(() => {
      if (modal.open) {
         setOpen(true)
      } else {
         setTimeout(() => setOpen(false), 300)
      }
   }, [modal.open])

   function close() {
      setModal(prev => ({ ...prev, open: false }))
   }

   useKeyPress('Escape', close)

   const modalRef = useRef()

   useClickOutside([modalRef], modal.open, close)

   return open
      ? <div className={`${styles.background} ${modal.open ? '' : styles.backgroundFadeOut}`}>
         <div className={`${styles.modal} ${modal.open ? '' : styles.modalScaleOut}`} ref={modalRef}>
            {modal.content}
         </div>
      </div>
      : null
}
