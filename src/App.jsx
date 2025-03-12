import React, { useContext } from 'react'
import "./App.css"
import Home from './Pages/Home'
import { Contextprovider } from './Components/Othercontext'
import About from './Pages/About'

const App = () => {
      const {Suns}=useContext(Contextprovider)
      const [Sun,setsun]=Suns
  return (
    <div style={{backgroundColor:Sun=="sun"?"rgb(21,21,21)":"white",color:Sun=="sun"?"white":"black"}}>
      <Home/>
      <About/>
    </div>
  )
}

export default App