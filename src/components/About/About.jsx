import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about '>
    <div className="about-left ">
        <img src={about_img} className='about-img' alt="" />
        <img src={play_icon} className='play-icon' alt="" />
    </div>
    <div className="about-right ">
        <h3>ABOUT US</h3>
        <h2>Our University is top among the country.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor excepturi numquam aliquam delectus deleniti debitis veritatis in eveniet doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias ea, in tempora at cumque nam consequatur facere a, accusantium ex quasi nisi similique delectus inventore perferendis possimus dignissimos. Voluptates?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae neque atque cupiditate aut doloribus officiis rem beatae distinctio commodi.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt illo est molestias vitae eum eaque soluta perferendis quisquam quidem rerum itaque maiores enim alias, earum minus error sit. Dolorem, repudiandae?</p>
    </div>
    </div>
  )
}

export default About