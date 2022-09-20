import { useEffect,useReducer } from 'react';
import {createContext,useState} from 'react'

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

export const ShopToggleContext=createContext({
    toggleShop:false,
    setToggleShop:()=>null,
    cartItems:[],
    addItemToCart:()=>{},
    dropItemFromCart:()=>{},
    removeItemFromCart:()=>{},
    cartCount:0,
    totalPrice:0,
});

export const CART_ACTION_TYPES={
    TOGGLE_SHOP:"TOGGLE_SHOP",
    ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",
    CHANGE_COUNTER:"CHANGE_COUNTER",
    CHANGE_TOTAL_PRICE:"CHANGE_TOTAL_PRICE"
}
const CART_INITIAL_STATE={
    toggleShop:false,
    cartItems:[],
    cartCount:0,
    totalPrice:0
}

const CartReducer=(state,action)=>{

    const {type,payload}=action;
    
    switch(type){
        case CART_ACTION_TYPES.TOGGLE_SHOP:
            return{...state,toggleShop:!state.toggleShop};
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {...state,cartItems:payload}
        case CART_ACTION_TYPES.CHANGE_COUNTER:
            return {...state,cartCount:payload}
        case CART_ACTION_TYPES.CHANGE_TOTAL_PRICE:
            return {...state,totalPrice:payload}
        default:
            throw new Error(`Unhandled type ${type} in CartReducer`)
    }

}

export const ShopToggleProvider=({children})=>{
    const [state,dispatch]=useReducer(CartReducer,CART_INITIAL_STATE)
    const {toggleShop,cartItems,cartCount,totalPrice}=state
    //reducer functions
    const setToggleShop=()=>{
        dispatch({type:CART_ACTION_TYPES.TOGGLE_SHOP})
    }
    const setCartItems=(cartitems)=>{
        dispatch({type:CART_ACTION_TYPES.ADD_ITEM_TO_CART,payload:cartitems})
    }
    const setCartCount=(cart_count)=>{
        dispatch({type:CART_ACTION_TYPES.CHANGE_COUNTER,payload:cart_count})
    }
    const setTotalPrice=(price)=>{
        dispatch({type:CART_ACTION_TYPES.CHANGE_TOTAL_PRICE,payload:price})
    }

    //setter help functions
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const dropItemFromCart=(productToAdd)=>{
        setCartItems(dropCartItem(cartItems,productToAdd))
    }
    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove))
    }

    useEffect(()=>{

        const newCartCount=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount)

    },[cartItems])
    useEffect(()=>{
        const newTotalPrice=cartItems.reduce((totalPrice,cartItem)=>totalPrice+(cartItem.quantity*cartItem.price),0)
        setTotalPrice(newTotalPrice)
    },[cartItems])
    const value={toggleShop,setToggleShop,cartItems,addItemToCart,cartCount
                ,removeItemFromCart,dropItemFromCart,totalPrice}

    return(
        <ShopToggleContext.Provider value={value}>{children}</ShopToggleContext.Provider>
    )


}