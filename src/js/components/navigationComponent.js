import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg'
import logo from '../../img/logo.png';
import cartIcon from '../../img/icon-cart.svg'
import { setPurchases } from '../redux/purchasesSlice';

export const NavigationComponent = () => {
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.purchases.purchases)
  let purchasesCount = 0

  useEffect(() => {
    const localStoragePurchases = JSON.parse(localStorage.getItem('purchases'))
    if (localStoragePurchases) {
      dispatch(setPurchases(localStoragePurchases))
    }
  }, [])

  if (purchases) {
    purchases.forEach(purchase => {
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
