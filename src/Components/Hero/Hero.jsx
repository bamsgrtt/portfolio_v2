import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt=""  />
        <h1><span>I'm Bambang Sugiarto,</span> I'm junior web development.</h1>
        <p>I’m a student passionate about web development. This portfolio shows my projects and what I’m learning. Check out my work and progress so far!</p>
        <div className="hero-action">
            <div className="hero-connect">Connect wiht me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
