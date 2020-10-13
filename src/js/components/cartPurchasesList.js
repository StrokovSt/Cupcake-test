import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CartPurchaseComponent} from './cartPurchaseComponent'

const CartPurchasesListComponent = () => {
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.books.purchase)
  
  return (
    <section className="cart-section">
      <ul className="cart-section__list">
        {purchases.map((purchase, index) => {
          return <CartPurchaseComponent purchase={purchase} key={index}/>
        })}
      </ul>
    </section>
  )
}

export default CartPurchasesListComponent