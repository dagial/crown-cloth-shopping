import { createAction } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES } from "./cart-types";

const addCartItem=(cartItems,itemToAdd)=>{
    const found=cartItems.find(element=>{
        if(element.id ===itemToAdd.id)return true;
        return false;
    })
    if(found){
       return cartItems.map(cartItem=>
        cartItem.id===itemToAdd.id?
         {...cartItem,quantity:cartItem.quantity+ 1 }:
         cartItem)
    }
    return [...cartItems,{...itemToAdd,quantity:1}]
}
const dropCartItem=(cartItems,itemToAdd)=>{
    if(itemToAdd.quantity==1){
        return cartItems.filter(cartItem=>cartItem.id!== itemToAdd.id)
    }
    return cartItems.map((cartItem)=>{
        if (cartItem.id===itemToAdd.id){
            
            return {...cartItem,quantity:cartItem.quantity-1}
        }
        else{
            return cartItem
        }

    })
}
const removeCartItem=(cartItems,itemToAdd)=>{
    const index=cartItems.findIndex(element=>element.id===itemToAdd.id)
    if(index!=-1){
    cartItems.splice(index,1)}
    return [...cartItems]
}

export const setToggleShop=()=>createAction(CART_ACTION_TYPES.TOGGLE_SHOP)

export const setCartItems=(cartItems,itemToAdd)=>{
    const CartItems=addCartItem(cartItems,itemToAdd)
    return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART,CartItems)
}

export const setDropCartItem=(cartItems,itemToDrop)=>{
    const dropItem=dropCartItem(cartItems,itemToDrop)
    return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART,dropItem)
}

export const setRemoveCartItem=(cartItems,itemToRemove)=>{
    const removeItem=removeCartItem(cartItems,itemToRemove)
    return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART,removeItem)
}

export const setTotalPrice=(totalPrice)=>createAction(CART_ACTION_TYPES.CHANGE_TOTAL_PRICE,totalPrice)
export const setCartCount=(cartCount)=>createAction(CART_ACTION_TYPES.CHANGE_COUNTER,cartCount)