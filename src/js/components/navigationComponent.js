import React from 'react';
import logo from '../../img/logo.png';
import cartIcon from '../../img/icon-cart.svg'
import { ReactSVG } from 'react-svg'

export const NavigationComponent = () => {
  return (
    <nav className="header__navigation navigation container">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Перейти на главную страницу
            <img className="navigation__logo" src={logo} alt="logo"></img>
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/cart">
            Перейти к корзине
            <span className="navigation__purchase">0</span>
            <ReactSVG className="navigation__cart" wrapper="span" src={cartIcon} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
