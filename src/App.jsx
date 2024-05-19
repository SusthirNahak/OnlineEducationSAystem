import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MainHero from './components/MainHero/MainHero'
import 'bootstrap/dist/css/bootstrap.min.css';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
      <Testimonials/>
      <Title  subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App