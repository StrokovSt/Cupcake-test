import React from 'react'
import { useSelector } from 'react-redux'
import {CartPurchaseComponent} from './cartPurchaseComponent'

const CartPurchasesListComponent = () => {
  const purchases = useSelector(state => state.purchases.purchases)
  
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