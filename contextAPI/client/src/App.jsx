import React from 'react'
import { useContext } from 'react'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext);
  console.log(data);
  
  return (
    <div>my App</div>
  )
}

export default App