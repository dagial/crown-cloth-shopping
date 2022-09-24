import { createSelector } from "reselect";



export const cartSelector=(state)=>state.cart

export const cartItemsSelector=createSelector([cartSelector],
    (cart)=>cart.cartItems)

export const cartCountSelector=createSelector([cartItemsSelector],
    (cartItems)=>cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0))
export const cartTotalSelector=createSelector([cartItemsSelector],
    (cartItems)=>cartItems.reduce((total,cartItem)=>total+(cartItem.quantity * cartItem.price),0))