import React from 'react'
import './About.css'
import profile from '../../assets/profile_img.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sunt porro ex, quasi cum ut fugit animi facere consequuntur cupiditate dolorum, dolore neque perferendis doloremque laudantium hic nesciunt quam libero.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cupiditate expedita mollitia eligendi minus nemo quos assumenda reiciendis nesciunt alias aperiam impedit id labore in, unde aspernatur accusamus amet dolores!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
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
