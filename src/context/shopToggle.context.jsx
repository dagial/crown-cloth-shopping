import {createContext,useState} from 'react'

export const ShopToggleContext=createContext({
    toggleShop:false,
    setToggleShop:()=>null
});


export const ShopToggleProvider=({children})=>{
    const [toggleShop,setToggleShop]=useState(false)
    const value={toggleShop,setToggleShop}

    return(
        <ShopToggleContext.Provider value={value}>{children}</ShopToggleContext.Provider>
    )


}