import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {  DataContext } from './Context/UserContext'

function App() {
  const [Data, setData] = useState(0)


  return (
    
    <DataContext.Provider value={{Data, setData}}>
    <Navbar/>
    <Home/>
    </DataContext.Provider>

  )
}

export default App
