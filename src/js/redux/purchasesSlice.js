import { createSlice } from '@reduxjs/toolkit'

const purchasesSlise = createSlice({
  name: 'purchases',
  initialState: {
    purchases: [],
    alert: null
  },
  reducers: {
    setPurchases(state, action) {
      state.purchases = action.payload
    },

    addPurchase(state, action) {
      const purchaseBook = action.payload

      if (state.purchases.some(e => e.isbn13 === purchaseBook.isbn13)) {
        state.purchases = state.purchases.map((purchase) => {
          if (purchase.isbn13 === purchaseBook.isbn13) {
            return {...purchase, count: purchase.count + purchaseBook.count}
          }
          return purchase
        })
      } else {
        state.purchases = state.purchases.concat(purchaseBook)
      }      
    },

    deletePurchase(state, action) {
      state.purchases = state.purchases.filter((purchase, index) => {
        if (index !== action.payload) {
          return true
        }
      })
    },

    changePurchaseCount(state, action) {
      const purchaseBook = action.payload

      state.purchases = state.purchases.map((purchase) => {
        if (purchase.isbn13 === purchaseBook.isbn13) {
          return {...purchase, count: purchaseBook.count}
        }
        return purchase
      })
    }
  }
})

export default purchasesSlise.reducer
export const {setPurchases, addPurchase, deletePurchase, changePurchaseCount} = purchasesSlise.actions