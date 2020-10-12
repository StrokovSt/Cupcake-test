import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg'
import logo from '../../img/logo.png';
import cartIcon from '../../img/icon-cart.svg'

export const NavigationComponent = () => {
  const purchases = useSelector(state => state.books.purchase)
  let purchasesCount = 0

  if (purchases) {
    purchases.forEach(purchase => {
      console.log(purchase.count)
      purchasesCount = purchasesCount + purchase.count
    });
  }

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
            <span className="navigation__purchase">{purchasesCount}</span>
            <ReactSVG className="navigation__cart" wrapper="span" src={cartIcon} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
