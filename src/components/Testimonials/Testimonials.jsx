import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
const slider =useRef()
let tx=0;

const slideForward =()=>{
if (tx>-50){
    tx-=25
}
slider.current.style.transform =`translateX(${tx}%)`
}
const slideBackward =()=>{
    if (tx<0){
        tx+=25
    }
    slider.current.style.transform =`translateX(${tx}%)`
}



  return (
    <div className='testimonials container'> 
        <img src={nexticon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={backicon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ankita Chakraborty</h3>
                            <span>TCS,Bangalore</span>
                        </div>
                        
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ea corrupti porro sit sunt repellendus quos quisquam ratione enim autem sapiente, minima maiores culpa a quae molestias cum, quas ab!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>SK Sofian Udin</h3>
                            <span>Jp Morgan,Hyderabad</span>
                        </div>
                        
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ea corrupti porro sit sunt repellendus quos quisquam ratione enim autem sapiente, minima maiores culpa a quae molestias cum, quas ab!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Tanuja Mehta</h3>
                            <span>Wipro,Bangalore</span>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ea corrupti porro sit sunt repellendus quos quisquam ratione enim autem sapiente, minima maiores culpa a quae molestias cum, quas ab!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Raghav Lawrence</h3>
                            <span>Infosys,Mumbai</span>
                        </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ea corrupti porro sit sunt repellendus quos quisquam ratione enim autem sapiente, minima maiores culpa a quae molestias cum, quas ab!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials