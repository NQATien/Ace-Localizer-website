import React from 'react'
import './style.css'

export const HeaderComponent = () => {
  return (
    <div className='HContainer'>
        <div className='HLogo'>Ace Localizer</div>
        <ul className='HMenu'>
            <li href="https://www.facebook.com">Giới thiệu</li>
            <li>Dự án</li>
            <li>Donate</li>
        </ul>
        <ul className='HAccountSearch'>
            <li>Login</li>
            <li>Search</li>
        </ul>
    </div>

  )
}

export default HeaderComponent