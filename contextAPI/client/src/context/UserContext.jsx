import React from 'react'
import { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
   
    const userName = "Abdul Rahman"
  
    return (
    <div>
 
    <DataContext.Provider value={userName}>
     
    {children}

    </DataContext.Provider>
      


    </div>
  )
}

export default UserContext