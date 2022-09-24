import { CART_ACTION_TYPES } from "./cart-types";

const CART_INITIAL_STATE={
    toggleShop:false,
    cartItems:[],
    cartCount:0,
    totalPrice:0
}

export const cartReducer=(state=CART_INITIAL_STATE,action)=>{
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
            return state
    }

}
