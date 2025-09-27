import React from 'react'
import './Footer.css'

import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="" />
          <p>Tetap terhubung dengan saya untuk update terbaru dan peluang kolaborasi. Silakan masukkan email Anda untuk berlangganan:</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>By bamsgrtt</p>
      </div>
    </div>
  )
}

export default Footer
