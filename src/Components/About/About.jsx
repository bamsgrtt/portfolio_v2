import React from 'react'
import './About.css'
import profile from '../../assets/profile_img.png'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Halo! Saya Bambang Sugiarto, seorang mahasiswa Teknik Informatika yang sedang menapaki perjalanan di dunia teknologi. Saat ini saya fokus mempelajari dasar-dasar pemrograman, khususnya menggunakan Java dan JavaScript, serta mulai memahami konsep backend dan database.</p>
                <p>Saya tertarik mengembangkan keterampilan lewat proyek-proyek kecil yang sederhana namun bermanfaat, seperti membuat converter file atau aplikasi praktis lain. Dengan semangat belajar dan eksplorasi, saya ingin terus berkembang dan membangun fondasi yang kuat untuk menjadi developer yang mandiri di masa depan.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About
