import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainHero from './components/MainHero/MainHero'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <MainHero/>
    </div>
  )
}

export default App