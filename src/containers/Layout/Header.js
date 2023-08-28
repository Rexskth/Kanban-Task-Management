import React from 'react'

// style
import './header.style.scss'

// components
import A1 from 'components/atoms/A1'

function Header() {
  return (
    <div className="header__container">
      <div className="header__logo" />
      <div className="header__right">
        <div className="header__avatar">
          <Avatar src="./assets/images/avatar.png" />
        </div>
      </div>
    </div>
  )
}

export default Header
