'use client'
import React, { createContext, useState } from 'react'

export const OffCanvasContext = createContext()
OffCanvasContext.displayName = 'OffCanvasStyle'

const OffCanvasProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <OffCanvasContext.Provider
      value={{
        isOpen,
        handleBurgerMenuClick: () => setIsOpen(!isOpen)
      }}
    >
      {children}
    </OffCanvasContext.Provider>
  )
}

export default OffCanvasProvider
