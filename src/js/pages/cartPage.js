import React from 'react';
import CartPurchasesListComponent from '../components/cartPurchasesList';

export const CartPage = () => {
  return (
    <React.Fragment>
      <h1>Im cart page</h1>
      <CartPurchasesListComponent />
    </React.Fragment>
  )
}