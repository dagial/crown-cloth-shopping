import { useEffect } from 'react';
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


export const ShopToggleProvider=({children})=>{
    const [toggleShop,setToggleShop]=useState(false)
    const [cartItems,setCartItems]=useState([])
    const [cartCount,setCartCount]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
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