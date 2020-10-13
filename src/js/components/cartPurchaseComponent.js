import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { changePurchaseCount, deletePurchase, showAlert } from '../redux/actions';
import { SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, BOOKS_LIMIT } from '../redux/types';

export const CartPurchaseComponent = ({purchase}) => {
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.books.purchase)
  const purchaseIndex = purchases.indexOf(purchase)
  const errorAlert = useSelector(state => state.books.alert)
  const [purchaseAlert, setPurchaseAlert] = useState(false)

  const addPurchaseHandler = () => {
    if (purchase.count >= BOOKS_LIMIT) {
      setPurchaseAlert(true)
      dispatch(showAlert(SHOW_PURCHASE_ALERT, HIDE_PURCHASE_ALERT, 'На складе отсутствует нужное количество товаров'))

      setTimeout(() => {
        setPurchaseAlert(false)
      }, 3000)

      return
    }
    dispatch(changePurchaseCount(purchase.count + 1, purchaseIndex))
  }

  const deletePurchaseHandler = () => {
    if (purchase.count <= 1) {
      return
    }
    dispatch(changePurchaseCount(purchase.count - 1, purchaseIndex))
  }

  const destroyHandler = () => {
    dispatch(deletePurchase(purchaseIndex))
  }

  return (
    <li className="cart-section__item">
      <img src={purchase.image}></img>
      <div>
        <h3>{purchase.title}</h3>
        <p>Book price: {purchase.price}</p>
        <p>Total price: {purchase.count * purchase.price}</p>
        {(errorAlert && purchaseAlert) && <p>{errorAlert}</p>}
        <div>
          <button type="button" onClick={addPurchaseHandler}>Добавить товар</button>
          <p>Выбрано книг {purchase.count}</p>
          <button type="button" onClick={deletePurchaseHandler}>Удалить товар</button>
        </div>
      </div>
      <button type="button" onClick={destroyHandler}>Удалить!!!</button>
    </li>
  )
}