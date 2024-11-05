import { useState } from 'react'
import Main from './Components/main'
import Navbar from './Components/Navbar'
import {  DataContext } from './Context/UserContext'

function App() {
  const [Data, setData] = useState(0)


  return (
    
    <DataContext.Provider value={{Data, setData}}>
    <Navbar/>
    <Main/>
    </DataContext.Provider>

  )
}

export default App
