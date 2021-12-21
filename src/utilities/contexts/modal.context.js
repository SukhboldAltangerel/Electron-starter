import React, { createContext, useMemo, useState } from 'react'

const ModalContext = createContext()

// eslint-disable-next-line react/prop-types
export function ModalStore({ children }) {
   const [modal, setModal] = useState({})

   const value = useMemo(() => ({ modal, setModal }), [modal])

   return (
      <ModalContext.Provider value={value}>
         {children}
      </ModalContext.Provider>
   )
}

export default ModalContext
