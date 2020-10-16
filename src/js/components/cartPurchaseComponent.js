import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deletePurchase, changePurchaseCount } from "../redux/purchasesSlice"

export const CartPurchaseComponent = ({purchase}) => {
  const BOOKS_LIMIT = 3
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.purchases.purchases)
  const purchaseIndex = purchases.indexOf(purchase)
  const [purchaseAlert, setPurchaseAlert] = useState(false)

  const addPurchaseHandler = () => {
    if (purchase.count >= BOOKS_LIMIT) {
      return
    }
    dispatch(changePurchaseCount({...purchase, count: purchase.count + 1}))
  }

  const deletePurchaseHandler = () => {
    if (purchase.count <= 1) {
      return
    }
    dispatch(changePurchaseCount({...purchase, count: purchase.count - 1}))
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