import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainHero from './components/MainHero/MainHero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
const App = () => {
  return (
    <div>
      <Navbar/>
      <MainHero/>
      <div className="container">
      <Title  subTitle='Our Programs' title='What We Offers'/>
      <Programs/>
      <About/>
      <Title  subTitle='Gallery' title='Campus Photos'/>
      </div>
      <Campus/>
      <Title  subTitle='TESTIMONIALS' title='What Student Says'/>
    </div>
  )
}

export default App